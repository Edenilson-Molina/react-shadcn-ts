import { AuthGuardProps } from "@/types/auth.interface";
import { useAuthStore } from "@/store/authStore";
import { Navigate } from "react-router-dom";

const GuestGuard = ({ children }: AuthGuardProps) => {
    const { token, isTokenExpired } = useAuthStore();

    const isAuthenticated = !!token && !isTokenExpired?.();

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return <>{ children }</>;
};

export default GuestGuard;
