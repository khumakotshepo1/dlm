import { getTenderResults } from "@/server/tenders";
import { DataTable } from "../_components/data-table";
import { TenderResults } from "../_components/TenderResults";
import { resultsColumns } from "../_components/results-columns";

export default async function TenderResultsPage() {
  const data = (await getTenderResults()) || [];

  return (
    <>
      <TenderResults />
      <DataTable columns={resultsColumns} data={data} />
    </>
  );
}
