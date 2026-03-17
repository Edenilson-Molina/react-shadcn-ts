import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ReactNode } from "react";
import { TrendingUp, Users, BarChart3, PieChart } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: string;
}

const iconMap: Record<string, ReactNode> = {
  TrendingUp: <TrendingUp className="h-5 w-5 text-primary" />,
  Users: <Users className="h-5 w-5 text-info" />,
  BarChart3: <BarChart3 className="h-5 w-5 text-warning" />,
  PieChart: <PieChart className="h-5 w-5 text-success" />,
};

const StatCard = ({ title, value, change, changeType, icon }: StatCardProps) => {
  return (
    <Card className="group overflow-hidden border-border/70 bg-card/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 dark:border-white/10 dark:bg-card/60">
      <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-3">
        <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 dark:bg-primary/20" />
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/70 bg-background/80 dark:border-white/10 dark:bg-background/40">
          {iconMap[icon]}
        </span>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold tracking-tight">{value}</div>
        <p
          className={`pt-1 text-xs font-semibold ${
            changeType === "positive" ? "text-success dark:text-success" : "text-destructive"
          }`}
        >
          {changeType === "positive" ? "↑" : "↓"} {change} vs mes anterior
        </p>
      </CardContent>
    </Card>
  );
};

export default StatCard;
