import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PerformanceDataPoint {
  day: string;
  value: number;
  goal: number;
}

interface PerformanceChartProps {
  data: PerformanceDataPoint[];
}

const PerformanceChart = ({ data }: PerformanceChartProps) => {
  const maxValue = Math.max(...data.map((d) => Math.max(d.value, d.goal)));

  return (
    <Card className="border-border/70 bg-card/85 dark:border-white/10 dark:bg-card/60">
      <CardHeader>
        <CardTitle>Desempeño Semanal</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex h-64 items-end justify-between gap-2 rounded-xl border border-border/60 bg-background/50 p-3 dark:border-white/10 dark:bg-background/25">
            {data.map((item) => (
              <div key={item.day} className="flex-1 flex flex-col items-center gap-2">
                <div className="flex gap-1 h-full items-end">
                  <div
                    className="flex-1 rounded-t-lg bg-primary/80 transition-all hover:bg-primary"
                    style={{
                      height: `${(item.value / maxValue) * 100}%`,
                    }}
                    title={`Actual: ${item.value}`}
                  />
                  <div
                    className="w-1 rounded-t-lg bg-primary/35 transition-all"
                    style={{
                      height: `${(item.goal / maxValue) * 100}%`,
                    }}
                    title={`Meta: ${item.goal}`}
                  />
                </div>
                <span className="text-xs font-medium text-muted-foreground">{item.day}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-4 justify-center text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded" />
              <span>Actual</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-3 bg-primary/30 rounded" />
              <span>Meta</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;
