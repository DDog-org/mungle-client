import axios from 'axios';
import { createHttpClient } from '@daengle/services/apis';

export const { api } = createHttpClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? '',
  role: 'vet',
});

api.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    window.location.href = '/login';
  }

  const isValidUser = (
    await axios.get('/vet/validate', {
      baseURL: process.env.NEXT_PUBLIC_API_URL ?? '',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
  ).data.response.isValidateMember;

  if (!isValidUser) {
    window.location.href = '/login';
  }

  return config;
});

export const guestApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? '',
});
