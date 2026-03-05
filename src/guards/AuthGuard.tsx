import { AuthGuardProps } from "@/types/auth.interface";
import { useAuthStore } from "@/store/authStore";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children, permissions }: AuthGuardProps) => {
    const { token, status } = useAuthStore();
    const { isTokenExpired, hasPermission } = useAuthStore();
    const hasAccess = permissions?.some((permiso) => hasPermission(permiso)) || false;
    
    if (!token || isTokenExpired) {
        if(token !== undefined) {
            if(status === 'unauthenticated') {
               return <Navigate to="/iniciar-sesion" />;
            }
            if(!hasAccess) {
                return <Navigate to="/acceso-denegado" />;
            }
        } else {
            return <Navigate to="/iniciar-sesion" />;
        }
    }

    return <>{ children }</>;

}

export default AuthGuard;