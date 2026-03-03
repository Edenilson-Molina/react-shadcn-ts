import { lazy } from "react";
import type { Router } from "@/types/route.interface";

export const routes: Router[] = [
  {
    path: "/",
    Layout: lazy(() => import("@/layouts/MainLayout")),
    children: [
      {
        path: "",
        Component: lazy(() => import("@/features/dashboard/pages/DashboardPage")),
      },
    ],
  },
  {
    path: "/login",
    Guard: lazy(() => import("@/components/specific/ProtectedRoute")),
    Component: lazy(() => import("@/features/auth/pages/LoginPage")),
  },
];
