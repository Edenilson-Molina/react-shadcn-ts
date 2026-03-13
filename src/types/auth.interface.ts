export interface AuthGuardProps {
    children: React.ReactNode;
    permissions?: string[];
}

export type AuthStatus = 'authenticated' | 'unauthenticated';

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
    status: boolean;
    expiresIn: number;
}

export interface JwtPayload {
    exp?: number;
    roles?: string[];
    permissions?: string[];
    [key: string]: unknown;
}

export interface LoginSessionData {
    roles: string[];
    permissions: string[];
    token: string;
}

export interface AuthState {
    openSideBar: boolean;
    status: AuthStatus;
    roles: string[];
    permisos: string[];
    token: string | null;
    hydrated: boolean;
    isAuthenticated: boolean;
    hasPermission: (permission: string) => boolean;
    setOpenSideBar: (value: boolean) => void;
    login: (userData: LoginSessionData) => void;
    setSessionFromToken: (token: string) => void;
    setHydrated: (value: boolean) => void;
    logout: () => void;
    isTokenExpired: () => boolean;
}