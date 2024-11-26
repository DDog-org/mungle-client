import axios from 'axios';
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

let accessToken = '';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true, // 쿠키에 저장된 RefreshToken 사용
});

// AccessToken 재발급 함수
async function refreshAccessToken() {
  try {
    // RefreshToken을 사용해 새로운 AccessToken 요청
    const response = await api.post(
      '/auth/refresh',
      {},
      { withCredentials: true } // 쿠키 전송 허용
    );

    accessToken = response.data.access_token;
    return accessToken;
  } catch (error) {
    console.error('AccessToken 재발급 실패:', error);
    throw error;
  }
}

// 요청 인터셉터
api.interceptors.request.use(
  (config) => {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`; // AccessToken을 헤더에 추가
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config; // 현재 요청 객체를 저장하여 재시도 시 사용

    // 401 AccessToken 만료 에러 처리
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // 중복 요청 방지

      try {
        const newAccessToken = await refreshAccessToken(); // 새로운 AccessToken 발급
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`; // 새 AccessToken 추가
        return api(originalRequest); // 원래 요청 재실행
      } catch (refreshError) {
        console.error('RefreshToken으로 AccessToken 재발급 실패:', refreshError);
        window.location.href = '/auth/callback'; // 로그인 페이지로 이동
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
