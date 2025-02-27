import paths from "@/routes/path";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext"; 

interface ProtectedRouteProps {
  requiredPermissions: Array<string>;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ requiredPermissions, children }) => {
  const { hasPermission, isAuthenticated } = useAuth();

  // Verify if the user has the required permissions
  const hasAccess = requiredPermissions.some(permission => hasPermission(permission));

  if(!isAuthenticated && !requiredPermissions.includes('public')) {
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