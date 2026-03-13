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
} from "lucide-react"

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
                <>
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
                          <SidebarMenuItem>
                            <CollapsibleTrigger asChild>
                              <SidebarMenuButton tooltip={item.title}>
                                {item.icon && <item.icon />}
                                <span>{item.title}</span>
                                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                              </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <SidebarMenuSub>
                                {item.items?.map((subItem) => (
                                  <SidebarMenuSubItem key={subItem.title} className={subItem.url === window.location.pathname ? "relative before:absolute before:-left-3 before:top-1/2 before:h-4 before:w-1 before:-translate-y-1/2 before:rounded before:bg-sidebar-primary" : ""}>
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
                          <SidebarMenuButton asChild tooltip={item.title} isActive={item.url === window.location.pathname}>
                            <a href={item.url} className="flex items-center gap-2">
                              {item.icon && <item.icon />}
                              <span>{item.title}</span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      )
                    }
                  })}
                </>
              ))
            }
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}


