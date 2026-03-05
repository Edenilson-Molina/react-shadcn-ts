import network from './network.services';
import { LoginRequest, LoginResponse } from '@/types/auth.interface';

export const loginService = async (payload: LoginRequest) => {
    try {
        const config = {
            baseURL: import.meta.env.VITE_VUE_APP_API_URL + '/api/public',
        };
        return await network.post<LoginResponse>('/auth/login', payload, config);
    } catch (error) {
        console.error('Error en loginService:', error);
        throw error;
    }
};

export const logoutService = async () => {
    try {
        return await network.post('/auth/logout');
    } catch (error) {
        console.error('Error en logoutService:', error);
        throw error;
    }
};