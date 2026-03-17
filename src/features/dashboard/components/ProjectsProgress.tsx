import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <Card>
      <CardHeader>
        <CardTitle>Proyectos en Progreso</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{project.name}</p>
                <p className="text-xs text-muted-foreground">
                  Équipo: {project.team} | Vencimiento: {project.deadline}
                </p>
              </div>
              <span className="text-sm font-semibold text-primary">{project.progress}%</span>
            </div>
            <Progress value={project.progress} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ProjectsProgress;
