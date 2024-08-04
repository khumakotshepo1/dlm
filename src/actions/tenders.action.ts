"use server";

import { sql } from "@/database";
import { JSDOM } from "jsdom";

// Define an interface for the tender data
interface TenderType {
  "Document Name": string;
  "Date of Advert": string;
  "Closing Date": string;
  Download: string;
}

interface TenderResType {
  "Bid / Contract Number": string;
  "Tender Description": string;
  "Closing Date": string;
  Download: string;
}

export const addTendersAction = async () => {
  try {
    const response = await fetch(
      "http://www.dihlabeng.gov.za/strategic-documents/strategic-documents-tender-adverts/",
      { cache: "no-cache" }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const html = await response.text();
    const dom = new JSDOM(html);
    const { document } = dom.window;

    const table = document.querySelector(".tftable");

    if (table && table instanceof dom.window.HTMLTableElement) {
      // Extract headers from the first row if present (if there's no thead element)
      const headerRow =
        table.querySelector("thead tr") || table.querySelector("tr");
      const headers = headerRow
        ? Array.from((headerRow as HTMLTableRowElement).cells).map(
            (cell) => cell.textContent?.trim() || ""
          )
        : [];

      // Extract data rows (skip the header row)
      const dataRows = table.querySelectorAll("tbody tr");

      const tenders: TenderType[] = Array.from(dataRows).map((row) => {
        const cells = Array.from((row as HTMLTableRowElement).cells);
        const rowData = headers.reduce((acc, header, index) => {
          acc[header] = cells[index]?.textContent?.trim() || "";
          return acc;
        }, {} as Record<string, string>);

        // Extract the URL from the Download field
        const downloadAnchor = cells[3]?.querySelector("a");
        const document_url = downloadAnchor ? downloadAnchor.href : "";

        return {
          ...rowData,
          Download: document_url,
        } as TenderType;
      });

      await sql.query("DELETE FROM tenders");

      // Insert data into the database
      await Promise.all(
        tenders.map(async (tender) => {
          const documentName = tender["Document Name"];
          // const match = documentName.match(/RFQ[_\d]+|RFQ[\s\d]+/);
          const match = documentName.match(/RFQ[_\s]*\d+(_\d+)*[A-Z]*/i);

          const tender_number = match
            ? match[0].trim().replace(/\s+/g, "_") // Replace spaces with underscores
            : "";

          const description = documentName;
          const advert_date = tender["Date of Advert"];
          const closing_date = tender["Closing Date"];
          const document_url = tender["Download"];

          const query = `
              INSERT INTO tenders (tender_number, description, advert_date, closing_date, document_url)
              VALUES ($1, $2, $3, $4, $5) RETURNING *
          `;
          const values = [
            tender_number,
            description,
            advert_date,
            closing_date,
            document_url,
          ];

          await sql.query(query, values);
        })
      );
    } else {
      console.error("Table not found or is not an HTMLTableElement");
    }
  } catch (error) {
    console.error("Error in addTendersAction:");
  }
};

export const addTenderResultsAction = async () => {
  try {
    const response = await fetch(
      "http://www.dihlabeng.gov.za/strategic-documents/strategic-documents-tender-results/",
      { cache: "no-cache" }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const html = await response.text();
    const dom = new JSDOM(html);
    const { document } = dom.window;

    // Assuming the table is the first table in the document
    const table = document.querySelector("table");

    if (!table || !(table instanceof dom.window.HTMLTableElement)) {
      console.error("Table not found or is not an HTMLTableElement");
      return;
    }

    // Extract headers from the first row
    const headerRow =
      table.querySelector("thead tr") || table.querySelector("tr");
    const headers = headerRow
      ? Array.from((headerRow as HTMLTableRowElement).cells).map(
          (cell) => cell.textContent?.trim() || ""
        )
      : [];

    // Extract data rows (skip the header row)
    const dataRows = table.querySelectorAll("tbody tr");

    const tenders: TenderResType[] = Array.from(dataRows).map((row) => {
      const cells = Array.from((row as HTMLTableRowElement).cells);
      const rowData = headers.reduce((acc, header, index) => {
        acc[header as keyof TenderResType] =
          cells[index]?.textContent?.trim() || "";
        return acc;
      }, {} as Record<string, string>);

      // Extract the URL from the Download field
      const downloadAnchor = cells[3]?.querySelector("a");
      const document_url = downloadAnchor ? downloadAnchor.href : "";

      return {
        ...rowData,
        Download: document_url,
      } as TenderResType;
    });

    await sql.query("DELETE FROM tender_results");

    // Insert data into the database
    await Promise.all(
      tenders.map(async (tender) => {
        const description = tender["Tender Description"];
        const closing_date = tender["Closing Date"];
        const tender_number = tender["Bid / Contract Number"];
        const document_url = tender["Download"];

        if (!description || !closing_date || !tender_number || !document_url) {
          console.error("Missing data in tender:", tender);
          return;
        }

        try {
          const query = `
              INSERT INTO tender_results (description, closing_date, tender_number, document_url)
              VALUES ($1, $2, $3, $4) RETURNING *
          `;
          const values = [
            description,
            closing_date,
            tender_number,
            document_url,
          ];
          await sql.query(query, values);
        } catch (dbError) {
          console.error("Error inserting tender into database:", dbError);
        }
      })
    );
  } catch (error) {
    console.error("Error in addTendersAction:");
  }
};
