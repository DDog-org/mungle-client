import axios, { AxiosResponse } from 'axios';
import { HttpClient } from './index.types';

type Role = 'user' | 'groomer' | 'vet';

interface Props {
  baseURL: string;
  role: Role;
}

export const createHttpClient = ({ baseURL, role }: Props) => {
  const axiosInstance = axios.create({ baseURL });
  const api: HttpClient = axiosInstance;

  // TODO: 추후 로그인 로직 변경
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
          const newAccessToken = (await getNewAccessToken({ role })).accessToken;
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return api(originalRequest);
        } catch (err) {
          window.location.href = '/login';
          return Promise.reject(err);
        }
      }

      return Promise.reject(error);
    }
  );

  const getNewAccessToken = async ({ role }: { role: Role }) => {
    try {
      return await api.post<{ grantType: string; accessToken: string }>(`/${role}/refresh-token`);
    } catch (error) {
      throw error;
    }
  };

  return { api };
};
