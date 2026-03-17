import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface ProjectProgress {
  id: number;
  name: string;
  progress: number;
  team: number;
  deadline: string;
}

interface ProjectsProgressProps {
  projects: ProjectProgress[];
}

const ProjectsProgress = ({ projects }: ProjectsProgressProps) => {
  return (
    <Card className="border-border/70 bg-card/85 dark:border-white/10 dark:bg-card/60">
      <CardHeader>
        <CardTitle>Proyectos en Progreso</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="space-y-2 rounded-xl border border-border/60 bg-background/60 p-3 dark:border-white/10 dark:bg-background/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{project.name}</p>
                <div className="mt-1 flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Equipo: {project.team}</Badge>
                  <Badge variant="outline" className="text-xs">Vencimiento: {project.deadline}</Badge>
                </div>
              </div>
              <span className="text-sm font-semibold text-primary">{project.progress}%</span>
            </div>
            <Progress value={project.progress} className="h-2.5 bg-primary/15 dark:bg-primary/20" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ProjectsProgress;
