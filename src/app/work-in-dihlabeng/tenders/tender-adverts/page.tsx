import { getTenderByYear } from "@/server/tenders";
import { Tenders } from "../_components/Tenders";
import { DataTable } from "../_components/data-table";
import { columns } from "../_components/columns";

export default async function TenderAdvertsPage() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;

  const data = (await getTenderByYear(year, month)) || [];

  return (
    <>
      hi
    </>
  );
}
