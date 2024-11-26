import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { usePostKakaoOauth, usePostOauthKakao } from '~/queries/oauth';
import { useAuthStore } from '~/stores/oauth/auth-store';

export default function AuthCallback() {
  const router = useRouter();
  const { code } = router.query || {};

  const { mutateAsync: postKakaoOauth } = usePostKakaoOauth();

  const { mutateAsync: postOauthKakao } = usePostOauthKakao();

  useEffect(() => {
    const handleAuthentication = async () => {
      if (!code) return;
      try {
        const accessToken = await postKakaoOauth(code as string);
        // 액세스 토큰 백엔드한테 보내주기
        const response = await postOauthKakao({ accessToken, loginType: 'GROOMER' });
        console.log('response.data----->', response.data);

        // 응답 데이터 추출
        const {
          response: { accessToken: serverAccessToken },
        } = response.data;

        // zustand 스토어에 토큰 저장
        useAuthStore.getState().setAccessToken(serverAccessToken);

        console.log('Server Access Token 저장 완료:', serverAccessToken);
      } catch (error) {
        throw new Error('로그인 실패');
      }
    };

    handleAuthentication();
  }, [code, postKakaoOauth, postOauthKakao, router]);

  return (
    <div>
      <p>Loading...</p>
    </div>
  );
}
