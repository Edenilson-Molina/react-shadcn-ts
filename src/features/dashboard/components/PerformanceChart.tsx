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
    <Card>
      <CardHeader>
        <CardTitle>Desempeño Semanal</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-end justify-between h-64 gap-2">
            {data.map((item) => (
              <div key={item.day} className="flex-1 flex flex-col items-center gap-2">
                <div className="flex gap-1 h-full items-end">
                  <div
                    className="flex-1 bg-primary rounded-t-lg opacity-70 transition-all hover:opacity-100"
                    style={{
                      height: `${(item.value / maxValue) * 100}%`,
                    }}
                    title={`Actual: ${item.value}`}
                  />
                  <div
                    className="w-1 bg-primary/30 rounded-t-lg transition-all"
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
