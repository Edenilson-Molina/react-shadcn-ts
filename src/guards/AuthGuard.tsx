import { AuthGuardProps } from "@/types/auth.interface";
import { useAuthStore } from "@/store/authStore";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }: AuthGuardProps) => {
    const { token, isTokenExpired } = useAuthStore();
    
    if (!token || isTokenExpired?.()) {
        return <Navigate to="/iniciar-sesion" replace />;
    }

    return <>{ children }</>;
}

export default AuthGuard;