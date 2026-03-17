import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
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
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Bienvenido de nuevo. Aquí está el resumen de tu negocio.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            Filtrar
          </Button>
          <Button size="sm" className="gap-2">
            <DownloadCloud className="h-4 w-4" />
            Descargar
          </Button>
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
        <TabsList>
          <TabsTrigger value="overview">Resumen</TabsTrigger>
          <TabsTrigger value="analytics">Analítica</TabsTrigger>
          <TabsTrigger value="proyectos">Proyectos</TabsTrigger>
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