import { Fragment, lazy, type ReactNode, Suspense } from "react";
import { Outlet, Route } from "react-router-dom";
import { Router } from "@/types/route.interface";

const RouteFallback = () => <div>Loading...</div>;
const withSuspense = (node: ReactNode) => (
  <Suspense fallback={<RouteFallback />}>{ node }</Suspense>
);

const renderRoute = (route: Router, index: number) => {
  const Component = route.Component || Fragment;
  const Layout = route.Layout || Fragment;
  const Guard = route.Guard || Fragment;
  return (
    <Route
      key={index}
      path={route.path}
      element={ withSuspense(
        <Layout>
          <Guard>
            { route.children ? <Outlet /> : <Component /> }
          </Guard>
        </Layout>
      )}
    >
      { route.children && renderRoutesGlobal(route.children) }
    </Route>
  )
}

export const renderRoutesGlobal = (routes: Router[]) => {
  return routes.map((route, index) => renderRoute(route, index));
}

export const routes: Router[] = [
  {
    path: "/",
    Layout: lazy(() => import("@/layouts/MainLayout")),
    children: [
      {
        path: "",
        Component: lazy(() => import("@/features/dashboard/pages/DashboardPage")),
      }
    ]
  },
  {
    path: "/login",
    Guard: lazy(() => import("@/components/specific/ProtectedRoute")),
    Component: lazy(() => import("@/features/auth/pages/LoginPage")),
  }
];