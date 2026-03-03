import { PropsWithChildren, useState } from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/layouts/SideBarComponent";
import { Navbar } from "./NavBarComponent";

const MainLayout = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <SidebarProvider open={open} onOpenChange={setOpen}>
        <AppSidebar />
        <SidebarInset className="flex flex-col w-full min-h-screen py-4 sm:pl-1 sm:pr-1 md:pr-2 gap-4">
          <Navbar />
          <div className="flex-1 p-4 rounded-t-[2rem] sm:rounded-xl">
            {children}
            <footer></footer>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default MainLayout;