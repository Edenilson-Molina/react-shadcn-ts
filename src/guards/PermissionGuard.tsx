import { AuthGuardProps } from "@/types/auth.interface";
import { useAuthStore } from "@/store/authStore";
import { Navigate } from "react-router-dom";

const PermissionGuard = ({ children, permissions = [] }: AuthGuardProps) => {
    const { hasPermission } = useAuthStore();

    if (permissions.length > 0) {
        const hasAccess = permissions.some((permission) => hasPermission(permission));
        if (!hasAccess) {
            return <Navigate to="/acceso-denegado" replace />;
        }
    }

    return <>{ children }</>;
};

export default PermissionGuard;
