export interface AuthResponse {
    accessToken: string;
    status: boolean;
    expiresIn: number;
}

export interface AuthPayload {
    id: number;
    firstName: string;
    lastName: string;
    identification: string;
    username: string;
    email: string;
    roles: string[];
    permissions: string[];
}

export interface AuthState {
  roles: string[];
  permisos: string[];
  token: string | null;
  isAuthenticated: boolean;
  hasRole: (role: string) => boolean;
  login: (userData: {roles: string[]; token: string}) => void;
  logout: () => void;
}