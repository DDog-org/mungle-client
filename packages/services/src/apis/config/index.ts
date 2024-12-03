import axios, { AxiosResponse } from 'axios';
import { HttpClient } from './index.types';

interface Props {
  baseURL: string;
}

export const createHttpClient = ({ baseURL }: Props) => {
  const axiosInstance = axios.create({ baseURL });
  const api: HttpClient = axiosInstance;

  api.interceptors.request.use((config) => {
    // TODO: 실제 토큰으로 변경
    const token = 'token';

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response.data?.response,
    (error) => Promise.reject(error)
  );

  return { api };
};
