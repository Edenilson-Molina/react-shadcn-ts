import { AuthState, JwtPayload, LoginSessionData } from '@/types/auth.interface';
import { create } from 'zustand';
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware';
import CryptoJS from 'crypto-js';

const ENCRYPTION_KEY = import.meta.env.VITE_ENCRYPTION_KEY || 'default';

const parseJwtPayload = (token: string): JwtPayload => {
  try {
    const encodedPayload = token.split('.')[1] || '';
    const normalized = encodedPayload.replace(/-/g, '+').replace(/_/g, '/');
    const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, '=');
    const decoded = atob(padded);
    return JSON.parse(decoded) as JwtPayload;
  } catch {
    return {};
  }
};

export const useAuthStore = create(
  persist<AuthState>(
    (set, get) => ({
      status: 'unauthenticated',
      roles: [],
      permisos: [],
      token: null,
      isAuthenticated: false,
      hasPermission: (permission: string) => get().permisos.includes(permission),
      login: (userData: LoginSessionData) => set({ 
        roles: userData.roles,
        permisos: userData.permissions,
        token: userData.token, 
        isAuthenticated: true,
        status: 'authenticated'
      }),
      setSessionFromToken: (token: string) => {
        const payload = parseJwtPayload(token);
        set({
          roles: payload.roles || [],
          permisos: payload.permissions || [],
          token,
          isAuthenticated: true,
          status: 'authenticated',
        });
      },
      logout: () => set({ roles: [], permisos: [], token: null, isAuthenticated: false, status: 'unauthenticated' }),
      isTokenExpired: () => {
        const { token } = get();
        if (!token) return true;

        try {
          const payload = parseJwtPayload(token);
          if (!payload.exp) return true;
          const expiry = payload.exp * 1000;
          return Date.now() > expiry;
        } catch (error) {
          console.error('Error verificando token:', error);
          return true;
        }
      },
      

    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(()=> encryptedStorage)
    }
  )
);


// Custom storage para localStorage con encriptación
const encryptedStorage: StateStorage = {
  getItem: (name: string): string | null => {
    const value = localStorage.getItem(name);
    if (!value) return null;
    try {
      const bytes = CryptoJS.AES.decrypt(value, ENCRYPTION_KEY);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      return decrypted;
    } catch (error) {
      console.error('Error desencriptando:', error);
      return null; // Si falla, devolvemos null y Zustand usará el estado inicial
    }
  },
  setItem: (name: string, value: string): void => {
    const encrypted = CryptoJS.AES.encrypt(value, ENCRYPTION_KEY).toString();
    localStorage.setItem(name, encrypted);
  },
  removeItem: (name: string): void => {
    localStorage.removeItem(name);
  },
};