import axios from "axios";
import { useSessionStore } from "@/store/session.store";

const baseURL = "http://localhost:8000";

const instance = axios.create({
  baseURL: import.meta.env.VITE_VUE_APP_API_URL || baseURL,
  headers: {
    "Content-type": "application/json",
    "Accept": "application/json",
    "Authorization": "",
  },
  withCredentials: false,
});

instance.interceptors.request.use((config) => {
  const token = useSessionStore.getState().token;
  if (token) {
    config.headers["Authorization"] = "Bearer " + token;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => { 
    if (error.response && error.response.status === 401) {
      useSessionStore.getState().logout();
    }
    return Promise.reject(error);
  }
)

export default instance;
