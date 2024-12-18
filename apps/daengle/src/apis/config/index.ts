import axios, { AxiosResponse } from 'axios';
import { createHttpClient, HttpClient } from '@daengle/services/apis';

export const { api } = createHttpClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? '',
  role: 'user',
});

export const guestApi: HttpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? '',
});

guestApi.interceptors.response.use(
  (response: AxiosResponse) => response.data?.response,
  (error) => Promise.reject(error)
);
