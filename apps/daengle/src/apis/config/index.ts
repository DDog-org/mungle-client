import axios from 'axios';
import {
  convertToDaengleErrorResponse,
  convertToDaengleSuccessResponse,
  HttpClient,
} from './index.types';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const api: HttpClient = axiosInstance;

api.interceptors.request.use((config) => {
  // TODO: 실제 토큰으로 변경
  const token = 'token';

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    response.data = convertToDaengleSuccessResponse(response);
    return response;
  },
  (error) => {
    return Promise.reject(convertToDaengleErrorResponse(error));
  }
);
