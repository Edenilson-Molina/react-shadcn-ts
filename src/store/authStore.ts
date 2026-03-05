import { AuthState } from '@/types/auth.interface';
import { create } from 'zustand';
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware';
import CryptoJS from 'crypto-js';

const ENCRYPTION_KEY = import.meta.env.VITE_ENCRYPTION_KEY || 'default';

export const useAuthStore = create(
  persist<AuthState>(
    (set, get) => ({
      status: 'unauthenticated',
      roles: [],
      permisos: [],
      token: null,
      isAuthenticated: false,
      hasPermission: (permission: string) => get().permisos.includes(permission),
      login: (userData: {roles: string[]; token: string}) => set({ 
        roles: userData.roles,
        token: userData.token, 
        isAuthenticated: true,
        status: 'authenticated'
      }),
      logout: () => set({ roles: [], token: null, isAuthenticated: false }),
      isTokenExpired: () => {
        const { token } = get();
        try {
          const payload = JSON.parse(atob(token?.split('.')[1] || ''));
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