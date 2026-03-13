import { lazy } from "react";
import type { Router } from "@/types/route.interface";
import AuthGuard from "@/guards/AuthGuard";
import PermissionGuard from "@/guards/PermissionGuard";
import GuestGuard from "@/guards/GuestGuard";

export const routes: Router[] = [
  {
    path: "/",
    Layout: lazy(() => import("@/layouts/MainLayout")),
    Guard: AuthGuard,
    children: [
      {
        path: "/",
        Guard: PermissionGuard,
        meta: {
          canAccess: ["VER_USUARIOS"],
        },
        Component: lazy(() => import("@/features/dashboard/pages/DashboardPage")),
      },
      {
        path: "/template",
        Guard: PermissionGuard,
        meta: {
          canAccess: ["VER_USUARIOS"],
        },
        Component: lazy(() => import("@/features/dashboard/pages/TemplatePage")),
      }
    ],
  },
  {
    path: "/iniciar-sesion",
    Guard: GuestGuard,
    Component: lazy(() => import("@/features/auth/pages/LoginPage")),
  },
  {
    path: "/acceso-denegado",
    Component: lazy(() => import("@/features/auth/pages/AccessDeniedPage")),
  }
];
