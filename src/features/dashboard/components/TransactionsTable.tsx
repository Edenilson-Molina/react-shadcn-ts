import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

const TransactionsTable = ({ transactions }: TransactionsTableProps) => {
  return (
    <Card className="border-border/70 bg-card/85 dark:border-white/10 dark:bg-card/60">
      <CardHeader>
        <CardTitle>Transacciones Recientes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto rounded-lg border border-border/60 dark:border-white/10">
          <Table>
            <TableHeader className="bg-muted/40 dark:bg-background/30">
              <TableRow>
                <TableHead>Cliente</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Categoría</TableHead>
                <TableHead>Monto</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id} className="transition-colors hover:bg-muted/30 dark:hover:bg-background/30">
                  <TableCell className="font-medium">{transaction.customer}</TableCell>
                  <TableCell className="text-muted-foreground">{transaction.date}</TableCell>
                  <TableCell>{transaction.category}</TableCell>
                  <TableCell className="font-semibold text-foreground">{transaction.amount}</TableCell>
                  <TableCell>
                    <Badge className={statusConfig[transaction.status]}>
                      {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionsTable;
