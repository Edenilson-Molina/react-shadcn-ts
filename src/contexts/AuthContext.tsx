import paths from "@/routes/path";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  roles: Array<string>;
  isAuthenticated: boolean;
  hasRole: (role: string) => boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  roles: [],
  isAuthenticated: false,
  hasRole: () => false,
  login: () => {},
  logout: () => {}
});

export function AuthProvider({ children }: PropsWithChildren) {
  const navigate = useNavigate();
  const [ roles, setRoles ] = useState<Array<string>>(() => {
    const storedPermissions = localStorage.getItem('roles');
    return storedPermissions ? JSON.parse(storedPermissions) : ['guest'];
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return !!localStorage.getItem('roles');
  });

  useEffect(() => {
    if(isAuthenticated) {
      localStorage.setItem('roles', JSON.stringify(roles));
    } else {
      localStorage.removeItem('roles');
    }
  }, [roles, isAuthenticated]);

  // Check if the user has a permission
  const hasRole = (role: string) => {
    return roles.includes(role);
  }

  // Login function
  const login = async () => {
    // Fetch roles from the server
    const fetchRoles = async () => {
      setRoles(['admin', 'master']);
    }
    await fetchRoles();
    setIsAuthenticated(true);
    navigate(paths.default);
  }

  // Logout function
  const logout = () => {
    setRoles(['public']);
    setIsAuthenticated(false);
    navigate(paths.login);
  }

  return (
    <AuthContext.Provider value={{ roles, hasRole, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);