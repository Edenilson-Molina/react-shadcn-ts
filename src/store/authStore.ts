import { create } from 'zustand';
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware';
import CryptoJS from 'crypto-js';

const ENCRYPTION_KEY = 'my-secret-key';

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

interface AuthState {
  roles: string[];
  token: string | null;
  isAuthenticated: boolean;
  hasRole: (role: string) => boolean;
  login: (userData: { roles: string[]; token: string }) => void;
  logout: () => void;
}

export const useAuthStore = create(
  persist<AuthState>(
    (set, get) => ({
      roles: ['guest'],
      token: null,
      isAuthenticated: false,
      hasRole: (role: string) => get().roles.includes(role),
      login: (userData: {roles: string[]; token: string}) => set({ 
        roles: userData.roles,
        token: userData.token, 
        isAuthenticated: true 
      }),
      logout: () => set({ roles: ['guest'], token: null, isAuthenticated: false }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(()=> encryptedStorage)
    }
  )
);