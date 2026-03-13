import { AuthGuardProps } from "@/types/auth.interface";
import { useSessionStore } from "@/store/session.store";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }: AuthGuardProps) => {
    const { hydrated, token, isTokenExpired } = useSessionStore();

    if (!hydrated) {
        return null;
    }
    
    if (!token || isTokenExpired?.()) {
        return <Navigate to="/iniciar-sesion" replace />;
    }

    return <>{ children }</>;
}

export default AuthGuard;