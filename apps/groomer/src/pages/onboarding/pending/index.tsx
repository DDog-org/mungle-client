import { useRouter } from 'next/router';
import { Layout, RoundButton, Text } from '@daengle/design-system';
import { RegistrationPending } from '@daengle/design-system/icons';
import { ROUTES } from '~/constants/commons/routes';
import { css } from '@emotion/react';

export default function Pending() {
  const router = useRouter();

  return (
    <Layout>
      <section css={wrapper}>
        <div css={content}>
          <RegistrationPending width="90px" height="90px" />

          <div css={title}>
            <Text typo="title2" color="black">
              {`현재 승인 대기 중입니다\n승인이 완료될 때까지 기다려 주세요`}
            </Text>
          </div>

          <div css={subtitle}>
            <Text typo="body9" color="gray500">
              알림톡으로 승인 유무를 알 수 있습니다
            </Text>
          </div>

          <RoundButton service="partner" size="S" onClick={() => router.push(ROUTES.LOGIN)}>
            <Text typo="body4" color="white">
              처음으로
            </Text>
          </RoundButton>
        </div>
      </section>
    </Layout>
  );
}

const wrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

const content = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  text-align: center;
`;

const title = css`
  margin: 38px 0 0;
`;

const subtitle = css`
  margin: 12px 0 47px;
`;
