import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { postOauthToken } from '~/apis';
import { ROUTES } from '~/constants/commons';
import { usePostKakaoMutation } from '~/queries';
import { useGroomerInfoFormStore } from '~/stores/auth';

export default function AuthKakaoCsallback() {
  const router = useRouter();
  const { code } = router.query || {};

  const { mutateAsync: postKakao } = usePostKakaoMutation();
  const { setGroomerInfoForm } = useGroomerInfoFormStore();

  useEffect(() => {
    if (!code) return;

    const handleAuthentication = async () => {
      const {
        data: { access_token },
      } = await postOauthToken(code as string);

      const { isOnboarding, email, accessToken } = await postKakao({
        kakaoAccessToken: access_token,
      });

      if (isOnboarding && email) {
        setGroomerInfoForm({ email });
        router.replace(ROUTES.ONBOARDING);
      } else {
        localStorage.setItem('accessToken', accessToken ?? '');
        router.push(ROUTES.HOME);
      }
    };

    handleAuthentication();
  }, [code]);

  return <></>;
}
