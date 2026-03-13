import { AuthGuardProps } from "@/types/auth.interface";
import { useSessionStore } from "@/store/session.store";
import { Navigate } from "react-router-dom";

const PermissionGuard = ({ children, permissions = [] }: AuthGuardProps) => {
    const { hydrated, hasPermission } = useSessionStore();

    if (!hydrated) {
        return null;
    }

    if (permissions.length > 0) {
        const hasAccess = permissions.some((permission) => hasPermission(permission));
        if (!hasAccess) {
            return <Navigate to="/acceso-denegado" replace />;
        }
    }

    return <>{ children }</>;
};

export default PermissionGuard;
