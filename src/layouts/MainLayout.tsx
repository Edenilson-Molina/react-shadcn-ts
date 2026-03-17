import { PropsWithChildren } from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/layouts/SideBarComponent";
import { AppNavbar } from "./NavBarComponent";

import { useSessionStore } from "@/store/session.store";

const MainLayout = ({ children }: PropsWithChildren) => {
  const { openSideBar, setOpenSideBar } = useSessionStore();
  return (
    <>
      <SidebarProvider open={openSideBar} onOpenChange={setOpenSideBar}>
        <AppSidebar />
        <SidebarInset className="flex flex-col w-full min-h-screen py-4 sm:pl-1 sm:pr-1 md:pr-2 gap-4">
          <AppNavbar />
          <main className="flex-1 p-4 rounded-t-[2rem] sm:rounded-xl">
            { children }
          </main>
          <footer>
            <div className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
          </footer>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default MainLayout;