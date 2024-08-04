"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Link } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type TenderType = {
  tender_id: number;
  tender_number: string;
  description: string;
  advert_date: string;
  closing_date: string;
  document_url: string;
};

export const resultsColumns: ColumnDef<TenderType>[] = [
  {
    accessorKey: "tender_number",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tender Number
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
  },

  {
    accessorKey: "closing_date",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Closing Date
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("closing_date"));
      const formatted = date.toLocaleDateString("en-US");

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "document_url",
    header: () => <div className="text-right">Document</div>,
    cell: ({ row }) => {
      const url = row.getValue("document_url") as string;

      return (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 flex items-center justify-center gap-1"
        >
          <Link />
        </a>
      );
    },
  },
];
