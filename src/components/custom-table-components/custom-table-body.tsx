import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { flexRender } from "@tanstack/react-table";

import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
  ComponentType,
} from "react";

export const CustomTableBody = ({ table, columns }: any) => {
  return (
    <TableBody>
      {table.getRowModel().rows?.length ? (
        table
          .getRowModel()
          .rows.map(
            (row: {
              id: Key | null | undefined;
              getIsSelected: () => any;
              getVisibleCells: () => any[];
            }) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map(
                  (cell: {
                    id: Key | null | undefined;
                    column: {
                      columnDef: {
                        cell:
                          | string
                          | number
                          | bigint
                          | boolean
                          | ReactElement<
                              any,
                              string | JSXElementConstructor<any>
                            >
                          | Iterable<ReactNode>
                          | ReactPortal
                          | Promise<AwaitedReactNode>
                          | ComponentType<any>
                          | null
                          | undefined;
                      };
                    };
                    getContext: () => any;
                  }) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  )
                )}
              </TableRow>
            )
          )
      ) : (
        <TableRow>
          <TableCell colSpan={columns.length} className="h-24 text-center">
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};
