import { useAuthStore } from '~/stores/oauth';

function handleLogout() {
  const logout = useAuthStore((state) => state.logoutUser);
  logout(); // 상태 초기화
}
