export interface AuthGuardProps {
    children: React.ReactNode;
    permissions?: string[];
}

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
    status: string;
    roles: string[];
    permisos: string[];
    token: string | null;
    isAuthenticated: boolean;
    hasPermission: (permission: string) => boolean;
    login: (userData: {roles: string[]; token: string}) => void;
    logout: () => void;
    isTokenExpired?: (token: string | null) => boolean;
}