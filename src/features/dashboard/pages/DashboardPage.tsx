import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DownloadCloud, Filter } from "lucide-react";
import StatCard from "../components/StatCard";
import TransactionsTable from "../components/TransactionsTable";
import ProjectsProgress from "../components/ProjectsProgress";
import TeamMembers from "../components/TeamMembers";
import PerformanceChart from "../components/PerformanceChart";
import {
  dashboardStats,
  recentTransactions,
  projectsProgress,
  teamMembers,
  weeklyPerformance,
} from "../data/mockData";

const DashboardPage = () => {
  return (
    <div className="relative space-y-8 pb-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 rounded-3xl bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.14),transparent_60%),radial-gradient(circle_at_80%_0%,hsl(var(--info)/0.12),transparent_48%)] dark:bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.22),transparent_62%),radial-gradient(circle_at_80%_0%,hsl(var(--accent)/0.22),transparent_52%)]" />

      {/* Header */}
      <div className="rounded-2xl border border-border/70 bg-card/60 p-5 backdrop-blur-sm md:p-6 dark:border-white/10 dark:bg-card/50">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <Badge className="bg-primary/15 text-primary hover:bg-primary/20 dark:bg-primary/25 dark:text-primary-foreground">
                Estado general: saludable
              </Badge>
              <Badge variant="outline" className="border-border/70 bg-background/80">
                Última actualización: hoy, 09:30
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Dashboard</h1>
            <p className="mt-2 max-w-2xl text-muted-foreground">
            Bienvenido de nuevo, aquí tienes un resumen de tus actividades recientes y estadísticas clave.
            </p>
          </div>
          <div className="flex gap-2 self-start md:self-auto">
            <Button variant="outline" size="sm" className="gap-2 border-border/80 bg-background/70 hover:bg-muted/80 dark:bg-background/30">
              <Filter className="h-4 w-4" />
              Filtrar
            </Button>
            <Button size="sm" className="gap-2 shadow-sm shadow-primary/20">
              <DownloadCloud className="h-4 w-4" />
              Descargar
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </div>

      {/* Tabs for different views */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="h-auto w-full justify-start rounded-xl border border-border/70 bg-card/70 p-1 dark:border-white/10 dark:bg-card/50">
          <TabsTrigger value="overview" className="rounded-lg px-4 py-2 data-[state=active]:shadow-sm">
            Resumen
          </TabsTrigger>
          <TabsTrigger value="analytics" className="rounded-lg px-4 py-2 data-[state=active]:shadow-sm">
            Analítica
          </TabsTrigger>
          <TabsTrigger value="proyectos" className="rounded-lg px-4 py-2 data-[state=active]:shadow-sm">
            Proyectos
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <TransactionsTable transactions={recentTransactions} />
            </div>
            <div>
              <TeamMembers members={teamMembers} />
            </div>
          </div>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4">
            <PerformanceChart data={weeklyPerformance} />
          </div>
        </TabsContent>

        {/* Proyectos Tab */}
        <TabsContent value="proyectos" className="space-y-4">
          <ProjectsProgress projects={projectsProgress} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardPage;