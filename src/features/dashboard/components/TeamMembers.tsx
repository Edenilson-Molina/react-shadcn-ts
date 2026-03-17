import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  status: string;
  avatar: string;
}

interface TeamMembersProps {
  members: TeamMember[];
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "en línea":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "ausente":
      return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
    default:
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
  }
};

const TeamMembers = ({ members }: TeamMembersProps) => {
  return (
    <Card className="border-border/70 bg-card/85 dark:border-white/10 dark:bg-card/60">
      <CardHeader>
        <CardTitle>Equipo</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {members.map((member) => (
          <div key={member.id} className="flex items-center justify-between space-x-4 rounded-xl border border-border/60 bg-background/60 p-3 transition-colors hover:bg-muted/30 dark:border-white/10 dark:bg-background/30 dark:hover:bg-background/40">
            <div className="flex items-center space-x-3 flex-1">
              <Avatar>
                <AvatarFallback className="bg-primary/90 text-primary-foreground font-semibold">
                  {member.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{member.name}</p>
                <p className="text-xs text-muted-foreground truncate">{member.role}</p>
              </div>
            </div>
            <Badge className={getStatusColor(member.status)}>
              {member.status}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TeamMembers;
