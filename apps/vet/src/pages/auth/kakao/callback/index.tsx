import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { postOauthToken } from '~/apis';
import { ROUTES } from '~/constants/commons';
import { usePostKakaoMutation } from '~/queries';
import { useVetInfoFormStore } from '~/stores/auth';

export default function AuthKakaoCallback() {
  const router = useRouter();
  const { code } = router.query || {};

  const { mutateAsync: postKakao } = usePostKakaoMutation();
  const { setVetInfoForm } = useVetInfoFormStore();

  useEffect(() => {
    if (!code) return;

    const handleAuthentication = async () => {
      const {
        data: { access_token },
      } = await postOauthToken(code as string);

      const { isOnboarding, isPending, email, accessToken } = await postKakao({
        kakaoAccessToken: access_token,
      }).then((res) => res.data.response);

      if (isOnboarding && !isPending && email) {
        setVetInfoForm({ email });
        router.replace(ROUTES.ONBOARDING);
        return;
      }

      if (!isOnboarding && isPending && !email) {
        router.push(ROUTES.ONBOARDING_PENDING);
      }

      if (!isOnboarding && !isPending && !email && accessToken) {
        localStorage.setItem('accessToken', accessToken);
        router.push(ROUTES.HOME);
      }
    };

    handleAuthentication();
  }, [code]);

  return <></>;
}
