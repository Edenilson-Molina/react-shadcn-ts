import { lazy } from "react";
import type { Router } from "@/types/route.interface";

export const routes: Router[] = [
  {
    path: "/",
    Layout: lazy(() => import("@/layouts/MainLayout")),
    Guard: lazy(() => import("@/guards/AuthGuard")),
    children: [
      {
        path: "",
        meta: {
          canAccess: ["VER_USUARIOS"],
        },
        Component: lazy(() => import("@/features/dashboard/pages/DashboardPage")),
      },
    ],
  },
  {
    path: "/iniciar-sesion",
    Component: lazy(() => import("@/features/auth/pages/LoginPage")),
  },
  {
    path: "/acceso-denegado",
    Component: lazy(() => import("@/features/auth/pages/AccessDeniedPage")),
  }
];
