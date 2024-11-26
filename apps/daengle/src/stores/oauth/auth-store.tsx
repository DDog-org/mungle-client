import { create } from 'zustand';

interface AuthState {
  accessToken: string | null; // 액세스 토큰 타입
  setAccessToken: (token: string) => void; // 액세스 토큰 설정 함수 타입
  clearAccessToken: () => void; // 액세스 토큰 삭제 함수 타입
}

// zustand 스토어 생성
export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null, // 초기 상태
  setAccessToken: (token: string) => set({ accessToken: token }), // 액세스 토큰 저장
  clearAccessToken: () => set({ accessToken: null }), // 액세스 토큰 삭제
}));
