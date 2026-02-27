import network from './network.services';

export const loginService = async (username: string, password: string) => {
    try {
        const config = {
            baseURL: import.meta.env.VITE_VUE_APP_API_URL + '/api/public',
        };
        return await network.post('/auth/login', { username, password }, config);
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