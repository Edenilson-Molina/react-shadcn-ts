import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible"

import {
  Box,
  SquareTerminal,
  ChevronRight,
  Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

import { LogOut } from "lucide-react";

import { logoutService } from "@/features/auth/services/auth.services";
import { useSessionStore } from "@/store/session.store";
import { useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";

const menuItems = [
  {
    seccion: "Proyectos",
    data: [
      {
        title: "Inicio",
        url: "/",
        icon: Box,
      },
      {
        title: "Dashboard",
        url: "#",
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: "Templates",
            url: "/template",
          }
        ],
      },
    ]
  },
]

export function AppSidebar() {
  const logout = useSessionStore((state) => state.logout);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      const response = await logoutService();
      if (response.status === 200) {
        logout();
        navigate("/login", { replace: true });
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Sidebar variant="sidebar">
      <SidebarHeader>
        <div className="flex flex-col items-center gap-2 justify-center pt-4">
          <img src="/src/assets/react.svg" alt="Logo" className="border border-transparent bg-white p-1 rounded-full h-16 w-16" />
          <span className="font-extrabold uppercase">Client App</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            { 
              menuItems.map((section) => (
                <Fragment key={section.seccion}>
                  <SidebarGroupLabel>{section.seccion}</SidebarGroupLabel>
                  {section.data.map((item) => {
                    if (item.items) {
                      return (
                        <Collapsible
                          key={item.title}
                          asChild
                          defaultOpen={item.isActive}
                          className="group/collapsible"
                        >
                          <SidebarMenuItem className="px-2">
                            <CollapsibleTrigger asChild>
                              <SidebarMenuButton tooltip={item.title}>
                                {item.icon && <item.icon className="!size-5 text-gray-700" />}
                                <span>{item.title}</span>
                                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                              </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="m-1">
                              <SidebarMenuSub>
                                {item.items?.map((subItem) => (
                                  <SidebarMenuSubItem key={subItem.title} className={subItem.url === window.location.pathname ? "relative before:absolute before:left-[-0.75rem] before:top-1/2 before:h-4 before:w-1 before:-translate-y-1/2 before:rounded before:bg-sidebar-primary" : ""}>
                                    <SidebarMenuSubButton asChild isActive={subItem.url === window.location.pathname}>
                                    <a href={subItem.url}>
                                      <span>{subItem.title}</span>
                                    </a>
                                    </SidebarMenuSubButton>
                                  </SidebarMenuSubItem>
                                ))}
                              </SidebarMenuSub>
                            </CollapsibleContent>
                          </SidebarMenuItem>
                        </Collapsible>
                      )
                    } else {
                      return (
                        <SidebarMenuItem key={item.title} className={item.url === window.location.pathname ? "relative before:absolute before:-left-3 before:top-1/2 before:h-4 before:w-1 before:-translate-y-1/2 before:rounded before:bg-sidebar-primary" : ""}>
                          <SidebarMenuButton asChild tooltip={item.title} isActive={item.url === window.location.pathname} className={!(item.url === window.location.pathname) ? "p-2" : "p-1"}>
                            <a href={item.url} className="flex items-center gap-2">
                              {item.icon && <item.icon className="!size-5 text-gray-700" />}
                              <span>{item.title}</span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      )
                    }
                  })}
                </Fragment>
              ))
            }
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button
          type="button"
          variant="secondary"
          onClick={ handleLogout }
          disabled={isLoading}
        >
          {
            isLoading ? 
              <>
                <Loader2 className="animate-spin" />
                Cerrando sesión...
              </>
              :
              <>
                <LogOut className="size-4" />
                Cerrar sesión
              </>
          }
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}


