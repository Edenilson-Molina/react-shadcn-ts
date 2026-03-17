import { ModeToggle } from "@/components/specific/ModeToggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export const AppNavbar = () => {
  return (
    <nav className="flex items-center justify-between w-full px-4 md:px-4">
      <SidebarTrigger className="rounded-full" />
      <article className="hidden md:block">
      </article>
      <article className="flex items-center gap-2">
        <ModeToggle />
        <Avatar className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </article>
    </nav>
  );
}