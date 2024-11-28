import axios from 'axios';
import { useAuthStore } from '~/stores/oauth';
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Axios 요청 인터셉터 설정
api.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken; // zustand에서 accessToken 가져오기

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`; // 헤더에 토큰 추가
  }
  return config;
});
