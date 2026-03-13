import { AuthState, JwtPayload, LoginSessionData } from '@/types/auth.interface';
import { create } from 'zustand';
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware';
import CryptoJS from 'crypto-js';

const ENCRYPTION_KEY = import.meta.env.VITE_ENCRYPTION_KEY || 'default';
const inMemoryStorage = new Map<string, string>();

const canUseLocalStorage = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  try {
    const key = '__auth_storage_test__';
    window.localStorage.setItem(key, key);
    window.localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
};

const encryptedStorage: StateStorage = {
  getItem: (name: string): string | null => {
    try {
      const value = canUseLocalStorage()
        ? window.localStorage.getItem(name)
        : (inMemoryStorage.get(name) ?? null);

      if (!value) return null;

      const bytes = CryptoJS.AES.decrypt(value, ENCRYPTION_KEY);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      return decrypted || null;
    } catch (error) {
      console.error('Error desencriptando:', error);
      return null;
    }
  },
  setItem: (name: string, value: string): void => {
    try {
      const encrypted = CryptoJS.AES.encrypt(value, ENCRYPTION_KEY).toString();

      if (canUseLocalStorage()) {
        window.localStorage.setItem(name, encrypted);
        return;
      }

      inMemoryStorage.set(name, encrypted);
    } catch (error) {
      console.error('Error guardando auth-storage:', error);
    }
  },
  removeItem: (name: string): void => {
    try {
      if (canUseLocalStorage()) {
        window.localStorage.removeItem(name);
        return;
      }

      inMemoryStorage.delete(name);
    } catch (error) {
      console.error('Error removiendo auth-storage:', error);
    }
  },
};

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

export const useSessionStore = create(
  persist<AuthState>(
    (set, get) => ({
      openSideBar: false,
      status: 'unauthenticated',
      roles: [],
      permisos: [],
      token: null,
      hydrated: false,
      isAuthenticated: false,
      hasPermission: (permission: string) => get().permisos.includes(permission),
      setOpenSideBar: (value: boolean) => set({ openSideBar: value }),
      setHydrated: (value: boolean) => set({ hydrated: value }),
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
      storage: createJSONStorage(() => encryptedStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);