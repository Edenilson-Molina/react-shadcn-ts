import React, { ComponentType, LazyExoticComponent, JSX } from "react";

type RouteComponent = ComponentType | LazyExoticComponent<() => JSX.Element>;
type LayoutComponent = ComponentType<{ children: React.ReactNode }> | LazyExoticComponent<(props: { children: React.ReactNode }) => JSX.Element>;
type GuardComponent = ComponentType<{ children: React.ReactNode; permissions?: string[] }> | LazyExoticComponent<(props: { children: React.ReactNode; permissions?: string[] }) => JSX.Element>;

export interface Router {
    path?: string;
    name?: string;
    icon?: string;
    Component?: RouteComponent | null;
    Layout?: LayoutComponent | null;
    Guard?: GuardComponent | null;
    meta?: {
        title?: string;
        icon?: string;
        requiresAuth?: boolean;
        showInMenu?: boolean;
        canAccess?: string[];
    };
    children?: Router[];
}