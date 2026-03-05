import { AuthGuardProps } from "@/types/auth.interface";
import { useAuthStore } from "@/store/authStore";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children, permissions = [] }: AuthGuardProps) => {
    const { token } = useAuthStore();
    const { isTokenExpired, hasPermission } = useAuthStore();
    
    if (!token || isTokenExpired?.()) {
        return <Navigate to="/iniciar-sesion" replace />;
    }

    if (permissions.length > 0) {
        const hasAccess = permissions.some((permission) => hasPermission(permission));
        if (!hasAccess) {
            return <Navigate to="/acceso-denegado" replace />;
        }
    }

    return <>{ children }</>;
}

export default AuthGuard;