import { lazy, type ReactNode, Suspense } from "react";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

import ProtectedRoute from "@/components/specific/ProtectedRoute";
import paths, { rootPaths } from "./path";

const App = lazy(() => import("@/App"));
const MainLayout = lazy(() => import("@/layouts/main-layout"));
const Dashboard = lazy(() => import("@/pages/dashboard"));
const AuthLayout = lazy(() => import("@/layouts/auth-layout"));
const LoginPage = lazy(() => import("@/features/auth/pages/LoginPage"));

const RouteFallback = () => <div>Loading...</div>;
const withSuspense = (node: ReactNode) => (
  <Suspense fallback={<RouteFallback />}>{node}</Suspense>
);

export const routes = [
  {
    element: withSuspense(<App />),
    errorElement: <div>Algo salió mal</div>,
    children: [
      {
        path: paths.default,
        element: withSuspense(
          <MainLayout>
            <Outlet />
          </MainLayout>
        ),
        children: [
          {
            index: true,
            element: (
              <ProtectedRoute requiredRoles={["admin"]}>
                <Dashboard />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: rootPaths.authRoot,
        element: withSuspense(
          <AuthLayout>
            <Outlet />
          </AuthLayout>
        ),
        children: [
          { index: true, element: <Navigate to={paths.login} replace /> },
          { path: "login", element: <LoginPage /> },
        ],
      },
      {
        path: rootPaths.errorRoot,
        children: [
          {
            path: "404",
            element: <div>404 Not Found</div>,
          },
        ],
      },
      { path: "*", element: <Navigate to={paths.notFound} replace /> },
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: "/",
});

export default router;