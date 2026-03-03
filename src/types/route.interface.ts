import React, { LazyExoticComponent, JSX } from "react";

export interface Router {
    path?: string;
    name?: string;
    icon?: string;
    Component?: LazyExoticComponent<() => JSX.Element> | null;
    Layout?: LazyExoticComponent<(props: { children: React.ReactNode }) => JSX.Element> | null;
    Guard?: LazyExoticComponent<(props: { children: React.ReactNode }) => JSX.Element> | null;
    meta?: {
        title?: string;
        icon?: string;
        requiresAuth?: boolean;
        showInMenu?: boolean;
        canAccess?: string[];
    };
    children?: Router[];
}