import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { flexRender } from "@tanstack/react-table";

export const CustomTableHeader = ({ table }: any) => {
  return (
    <TableHeader>
      {table
        .getHeaderGroups()
        .map(
          (headerGroup: {
            id: React.Key | null | undefined;
            headers: any[];
          }) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          )
        )}
    </TableHeader>
  );
};
