import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ReactNode } from "react";
import { TrendingUp, Users, BarChart3, PieChart } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: string;
  className?: string;
  type?: "primary" | "info" | "warning" | "success";
}

const iconMap: Record<string, ReactNode> = {
  TrendingUp: <TrendingUp className="h-7 w-7 text-primary" />,
  Users: <Users className="h-7 w-7 text-info" />,
  BarChart3: <BarChart3 className="h-7 w-7 text-warning" />,
  PieChart: <PieChart className="h-7 w-7 text-success" />,
};

const StatCard = ({ title, value, change, changeType, icon, className, type }: StatCardProps) => {
  return (
    <Card
      className={cn(
        "group overflow-hidden border shadow-none transition-all duration-300 hover:-translate-y-0.5 dark:border-white/10 dark:bg-card/60 ",
        className
      )}
    >
      <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-3">
        <div className="absolute -right-6 -top-6 h-32 w-32 blur-3xl rounded-full bg-primary/20  transition-opacity duration-300 group-hover:opacity-100 dark:bg-primary/20" />
        <CardTitle className="text-base font-medium text-muted-foreground">{title}</CardTitle>
        <span className="relative inline-flex h-10 w-10 items-center justify-center">
          {iconMap[icon]}
        </span>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-0.5">
          {value}
        </div>
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
