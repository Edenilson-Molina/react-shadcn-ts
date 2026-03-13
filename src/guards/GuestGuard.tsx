import { AuthGuardProps } from "@/types/auth.interface";
import { useSessionStore } from "@/store/session.store";
import { Navigate } from "react-router-dom";

const GuestGuard = ({ children }: AuthGuardProps) => {
    const { hydrated, token, isTokenExpired } = useSessionStore();

    if (!hydrated) {
        return null;
    }

    const isAuthenticated = !!token && !isTokenExpired?.();

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return <>{ children }</>;
};

export default GuestGuard;
