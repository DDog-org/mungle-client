import api from '~/api/api';
import { useAuthStore } from '~/stores/oauth';

async function handleLogin() {
  const response = await api.post('/auth/callback', { email, password });

  // Zustand 상태 관리 함수 호출
  const login = useAuthStore((state) => state.loginUser);
  login(response.data); // 액세스 토큰 저장
}
