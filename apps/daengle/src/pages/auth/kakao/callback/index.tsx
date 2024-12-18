import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { postOauthToken } from '~/apis';
import { ROUTES } from '~/constants/commons';
import { usePostKakaoMutation } from '~/queries';
import { useUserInfoFormStore } from '~/stores/auth';

export default function AuthKakaoCallback() {
  const router = useRouter();
  const { code } = router.query || {};

  const { mutateAsync: postKakao } = usePostKakaoMutation();
  const { setForm } = useUserInfoFormStore();

  useEffect(() => {
    if (!code) return;

    const handleAuthentication = async () => {
      const {
        data: { access_token },
      } = await postOauthToken(code as string);

      const { isOnboarding, email, accessToken } = await postKakao({
        kakaoAccessToken: access_token,
      }).then((res) => res.data.response);

      if (isOnboarding && email) {
        setForm({ email });
        router.replace(ROUTES.ONBOARDING_USER_INFO);
      } else {
        localStorage.setItem('accessToken', accessToken ?? '');
        router.push(ROUTES.HOME);
      }
    };

    handleAuthentication();
  }, [code]);

  return <></>;
}
