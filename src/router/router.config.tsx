import { Fragment, Suspense, type ReactNode } from "react";
import { Outlet, Route } from "react-router-dom";
import { routes } from "@/router/routes";
import type { Router } from "@/types/route.interface";

export const RouteFallback = () => <div>Loading...</div>;

export const withSuspense = (node: ReactNode) => (
	<Suspense fallback={<RouteFallback />}>{node}</Suspense>
);

const renderRoute = (route: Router, index: number) => {
	const Component = route.Component || Fragment;
	const Layout = route.Layout || Fragment;
	const Guard = route.Guard;

	return (
		<Route
			key={index}
			path={route.path}
			element={withSuspense(
				<Layout>
					{ Guard ? 
						<Guard permissions={route.meta?.canAccess}>
							{ route.children ? <Outlet /> : <Component /> }
						</Guard>
						: route.children ? <Outlet /> : <Component />
					}
				</Layout>
			)}
		>
			{ route.children && renderRoutes(route.children) }
		</Route>
	);
};

const renderRoutes = (list: Router[]) => list.map((route, index) => renderRoute(route, index));

export const renderRoutesGlobal = (list: Router[] = routes) => renderRoutes(list);
