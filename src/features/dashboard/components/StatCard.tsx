import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, BarChart3, PieChart } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: string;
}

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="h-8 w-8 text-primary" />,
  Users: <Users className="h-8 w-8 text-blue-500" />,
  BarChart3: <BarChart3 className="h-8 w-8 text-purple-500" />,
  PieChart: <PieChart className="h-8 w-8 text-green-500" />,
};

const StatCard = ({ title, value, change, changeType, icon }: StatCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {iconMap[icon]}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p
          className={`text-xs font-medium pt-1 ${
            changeType === "positive" ? "text-green-600 dark:text-green-400" : "text-destructive"
          }`}
        >
          {changeType === "positive" ? "↑" : "↓"} {change} vs mes anterior
        </p>
      </CardContent>
    </Card>
  );
};

export default StatCard;
