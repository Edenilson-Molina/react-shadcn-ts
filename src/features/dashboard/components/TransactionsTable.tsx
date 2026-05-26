import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DataTable, { type DataTableColumn } from "@/components/shared/DataTable";

interface Transaction {
  id: number;
  date: string;
  customer: string;
  amount: string;
  status: string;
  category: string;
}

interface TransactionsTableProps {
  transactions: Transaction[];
}

const statusConfig: Record<string, string> = {
  completado: "border border-success/30 bg-success/15 text-success hover:bg-success/20 dark:bg-success/20",
  pendiente: "border border-warning/30 bg-warning/15 text-warning-foreground hover:bg-warning/20 dark:bg-warning/25",
  rechazado: "border border-destructive/30 bg-destructive/15 text-destructive hover:bg-destructive/20 dark:bg-destructive/25",
};

const formatStatusLabel = (status: string) =>
  status.charAt(0).toUpperCase() + status.slice(1);

const columns: DataTableColumn<Transaction>[] = [
  {
    accessorKey: "customer",
    header: "Cliente",
    className: "font-medium",
  },
  {
    accessorKey: "date",
    header: "Fecha",
    className: "text-muted-foreground",
  },
  {
    accessorKey: "category",
    header: "Categoría",
  },
  {
    accessorKey: "amount",
    header: "Monto",
    className: "font-semibold text-foreground",
  },
  {
    accessorKey: "status",
    header: "Estado",
    render: (status) => {
      const statusValue = String(status);

      return <Badge className={statusConfig[statusValue]}>{formatStatusLabel(statusValue)}</Badge>;
    },
  },
];

const TransactionsTable = ({ transactions }: TransactionsTableProps) => {
  return (
    <Card className="border-border/70 bg-card/85 dark:border-white/10 dark:bg-card/60">
      <CardHeader>
        <CardTitle>Transacciones Recientes</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable
          columns={columns}
          data={transactions}
          emptyMessage="No hay transacciones recientes."
        />
      </CardContent>
    </Card>
  );
};

export default TransactionsTable;
