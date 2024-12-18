import axios from 'axios';
import { createHttpClient } from '@daengle/services/apis';

export const { api } = createHttpClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? '',
  role: 'user',
});

export const guestApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? '',
});

guestApi.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return config;
});
