import paths from "@/routes/path";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

interface ProtectedRouteProps {
  requiredRoles: Array<string>;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ requiredRoles, children }) => {
  const { hasRole, isAuthenticated } = useAuthStore();

  // Verify if the user has the required permissions
  const hasAccess = requiredRoles.some(role => hasRole(role));

  if(!isAuthenticated && !requiredRoles.includes('guest')) {
    // If not authenticated, redirect to the login page
    return <Navigate to={ paths.login } replace />;
  }

  if (!hasAccess) {
    // If not authorized, redirect to the not found page
    return <Navigate to={ paths.notFound } replace />;
  }

  return children;
}

export default ProtectedRoute;