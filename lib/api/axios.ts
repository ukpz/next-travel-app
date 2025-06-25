// lib/api/axios.ts
import axios from 'axios';
import { getToken, removeToken } from '../utils/token';
import { API_BASE_URL, LOCAL_API_BASE_URL } from '../constants/config';

const api = axios.create({
    baseURL: LOCAL_API_BASE_URL, // defined in .env.local
    timeout: 10000,
});

api.interceptors.request.use(
    config => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

api.interceptors.response.use(
    res => res,
    error => {
        if (error.response?.status === 401) {
            removeToken();
            // optionally redirect to login
        }
        return Promise.reject(error);
    }
);


export default api;
