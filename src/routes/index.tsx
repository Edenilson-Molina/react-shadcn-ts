import { Suspense, lazy } from "react";
import { createBrowserRouter, Outlet, Navigate } from "react-router";

import paths, { rootPaths } from "./path";

import ProtectedRoute from "@/components/specific/ProtectedRoute";

/* --------------------- Lazy Load ---------------------- */
const App = lazy(() => import("@/App"));
const MainLayout = lazy(() => import("@/layouts/main-layout"));
const Dashboard = lazy(() => import("@/pages/dashboard"));
const AuthLayout = lazy(() => import("@/layouts/auth-layout"));
const Login = lazy(() => import("@/pages/authentication/login"));
/* ------------------------------------------------------ */

export const routes = [
  {
    element:(
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    ),
    children:[
      {
        path: paths.default,
        element: (
          <MainLayout>
            <Suspense fallback={<div>Loading Main Layout...</div>}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            index: true,
            element: (
              <ProtectedRoute requiredRoles={['admin']}>
                <Dashboard />
              </ProtectedRoute>
            )
          }
        ]
      },
      {
        element: (
          <AuthLayout>
            <Suspense fallback={<div>Loading Auth Layout...</div>}>
              <Outlet />
            </Suspense>
          </AuthLayout>
        ),
        children:[
          {
            index: true,
            path: paths.login,
            element: <Login />
          },
        ]
      },
      {
        path: rootPaths.errorRoot,
        children: [
          {
            path: paths.notFound,
            element: <div>404 Not Found</div>
          }
        ]
      },
      {
        path: '*',
        element: <Navigate to={ paths.notFound } replace />
      }
    ]
  }
];

const router = createBrowserRouter(routes, {
  basename: '/'
});

export default router;