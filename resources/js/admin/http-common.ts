import axios, { AxiosInstance } from "axios";
import { HttpResponseStatuses } from "./types/enum";
import TokenService from "./services/TokenService";

const apiClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
});

apiClient.interceptors.request.use((config: any) => {
    config.headers['Accept-Language'] = 'uz';

    const token: string|null = TokenService.getToken();

    if (token) {
        config.headers.Authorization = 'Bearer ' + token
    }

    return config;
}, error => Promise.reject(error));

apiClient.interceptors.response.use((response: any) => response, (error: any) => {
    if (error.response && error.response.status == HttpResponseStatuses.UNAUTHORIZED) {
        TokenService.removeAll();
        window.location.href = '/';
    }

    return Promise.reject(error);
});

export default apiClient;
