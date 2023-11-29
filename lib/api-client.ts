import axios, { AxiosInstance } from 'axios';

export const apiClient: AxiosInstance = axios.create({
    timeout: 5000,
});