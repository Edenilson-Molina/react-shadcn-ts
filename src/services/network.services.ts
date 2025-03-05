import axios from "axios";
import { useAuthStore } from "@/store/authStore";

const baseURL = "http://localhost:8000";

const createAxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
  timeout: 5000,
});

createAxiosInstance.defaults.headers.common["Authorization"] = "Bearer " + useAuthStore.getState().token;

export default createAxiosInstance;
