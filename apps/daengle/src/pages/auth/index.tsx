import { Layout, RoundButton } from '@daengle/design-system';
import { wrapper, logoImageBox, buttonBox } from './index.styles';
import Image from 'next/image';

const REST_API_KEY = process.env.NEXT_PUBLIC_REST_API_KEY;
const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;
const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export default function Auth() {
  const handleKakaoLoginClick = () => {
    window.location.href = kakaoAuthUrl;
  };
  return (
    <Layout isAppBarExist={false}>
      <div css={wrapper}>
        <div css={logoImageBox}>
          <Image src="/icons/auth_logo.svg" alt="로고 이미지" width={183} height={47} />
        </div>
        <RoundButton variant={'kakao'} size="L" fullWidth onClick={handleKakaoLoginClick}>
          카카오톡으로 시작하기
        </RoundButton>
      </div>
    </Layout>
  );
}
