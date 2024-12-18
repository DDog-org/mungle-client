import axios, { AxiosResponse } from 'axios';
import { HttpClient } from './index.types';

type Role = 'user' | 'groomer' | 'vet';

interface Props {
  baseURL: string;
  role: Role;
}

export const createHttpClient = ({ baseURL, role }: Props) => {
  const axiosInstance = axios.create({ baseURL, timeout: 5000, withCredentials: true });
  const api: HttpClient = axiosInstance;

  api.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response.data?.response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response && error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const newAccessToken = await getNewAccessToken({ role });
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return api(originalRequest);
        } catch (err) {
          console.error('Failed to refresh token:', err);
          window.location.href = '/login';
          return Promise.reject(err);
        }
      }

      return Promise.reject(error);
    }
  );

  const getNewAccessToken = async ({ role }: { role: Role }): Promise<string> => {
    try {
      const response = await axios.post<{ accessToken: string }>(
        `/${role}/refresh-token`,
        {},
        {
          baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
          withCredentials: true,
        }
      );

      const { accessToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
      return accessToken;
    } catch (error) {
      throw error;
    }
  };

  return { api };
};
