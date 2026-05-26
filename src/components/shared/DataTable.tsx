import type { ReactNode } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export interface DataTableColumn<TData> {
  header: ReactNode;
  accessorKey: keyof TData & string;
  className?: string;
  headerClassName?: string;
  render?: (value: TData[keyof TData], row: TData, rowIndex: number) => ReactNode;
}

interface DataTableProps<TData> {
  columns: DataTableColumn<TData>[];
  data: TData[];
  emptyMessage?: string;
  className?: string;
}

const formatCellValue = (value: unknown) => {
  if (value === null || value === undefined || value === "") {
    return "-";
  }

  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return value;
  }

  return String(value);
};

const DataTable = <TData,>({
  columns,
  data,
  emptyMessage = "No hay datos para mostrar.",
  className,
}: DataTableProps<TData>) => {

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border/60 dark:border-white/10",
        className
      )}
    >
      <Table>
        <TableHeader className="bg-muted/40 dark:bg-background/30">
          <TableRow>
            {columns.map((column) => (
              <TableHead
                key={String(column.accessorKey)}
                className={column.headerClassName ?? column.className}
              >
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length ? (
            data.map((row, rowIndex) => (
              <TableRow
                key={(row as { id?: string | number }).id ?? rowIndex}
                className="transition-colors hover:bg-muted/30 dark:hover:bg-background/30"
              >
                {columns.map((column) => {
                  const value = row[column.accessorKey];

                  return (
                    <TableCell
                      key={String(column.accessorKey)}
                      className={column.className}
                    >
                      {column.render
                        ? column.render(value, row, rowIndex)
                        : formatCellValue(value)}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={Math.max(columns.length, 1)}
                className="h-24 text-center text-muted-foreground"
              >
                {emptyMessage}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;