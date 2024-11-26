import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  accessToken: '', // 초기 상태
  setAccessToken: (token) => set({ accessToken: token }), // 토큰 설정
  clearAccessToken: () => set({ accessToken: '' }), // 토큰 제거
}));
