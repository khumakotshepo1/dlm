import { Input } from "@/components/ui/input";

export const CustomFilter = ({ table, column_id, columnName }: any) => {
  return (
    <Input
      placeholder={`Filter ${columnName}...`}
      value={(table.getColumn(column_id)?.getFilterValue() as string) ?? ""}
      onChange={(event) =>
        table.getColumn(column_id)?.setFilterValue(event.target.value)
      }
      className="max-w-sm"
    />
  );
};
