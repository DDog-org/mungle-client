import { AuthLogo, LoginKakaoLogo, PartnerAuthLogo } from '@daengle/design-system/icons';
import { Layout, RoundButton, Text } from '@daengle/design-system';
import { css } from '@emotion/react';

const REST_API_KEY = process.env.NEXT_PUBLIC_REST_API_KEY;
const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export default function Login() {
  const handleKakaoLoginButtonClick = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Layout isAppBarExist={false}>
      <div css={wrapper}>
        <div css={logoWrapper}>
          <PartnerAuthLogo width={183} height={47} />
        </div>
        <RoundButton variant="kakao" size="L" fullWidth onClick={handleKakaoLoginButtonClick}>
          <div css={loginWrapper}>
            <LoginKakaoLogo width="20px" height=" 20px" />
            <Text typo="subtitle2" color="black">
              카카오톡으로 시작하기
            </Text>
          </div>
        </RoundButton>
      </div>
    </Layout>
  );
}

const wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 0 18px;
`;

const logoWrapper = css`
  margin: 0 0 142px;
`;

const loginWrapper = css`
  display: flex;
  align-items: center;
  gap: 8px;
`;
