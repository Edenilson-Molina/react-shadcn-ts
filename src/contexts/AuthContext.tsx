import paths from "@/routes/path";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  permissions: Array<string>;
  isAuthenticated: boolean;
  setPermissions: (permissions: Array<string>) => void;
  hasPermission: (permission: string) => boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  permissions: [],
  isAuthenticated: false,
  setPermissions: () => {},
  hasPermission: () => false,
  login: () => {},
  logout: () => {}
});

export function AuthProvider({ children }: PropsWithChildren) {
  const navigate = useNavigate();
  const [ permissions, setPermissions ] = useState<Array<string>>(() => {
    const storedPermissions = localStorage.getItem('permissions');
    return storedPermissions ? JSON.parse(storedPermissions) : ['public'];
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return !!localStorage.getItem('permissions');
  });

  useEffect(() => {
    if(isAuthenticated) {
      localStorage.setItem('permissions', JSON.stringify(permissions));
    } else {
      localStorage.removeItem('permissions');
    }
  }, [permissions, isAuthenticated]);

  // Check if the user has a permission
  const hasPermission = (permission: string) => {
    return permissions.includes(permission);
  }

  // Login function
  const login = async () => {
    // Fetch permissions from the server
    const fetchPermissions = async () => {
      setPermissions(['view:dashboard', 'view:settings']);
    }
    await fetchPermissions();
    setIsAuthenticated(true);
    navigate(paths.default);
  }

  // Logout function
  const logout = () => {
    setPermissions(['public']);
    setIsAuthenticated(false);
    navigate(paths.login);
  }

  return (
    <AuthContext.Provider value={{ permissions, setPermissions, hasPermission, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);