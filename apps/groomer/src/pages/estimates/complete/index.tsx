import { useRouter } from 'next/router';
import { Layout, RoundButton, Text } from '@daengle/design-system';
import { TransmissionComplete } from '@daengle/design-system/icons';
import { ROUTES } from '~/constants/commons/routes';
import { css } from '@emotion/react';

export default function Pending() {
  const router = useRouter();

  return (
    <Layout>
      <section css={wrapper}>
        <div css={content}>
          <TransmissionComplete width={90} height={90} />

          <div css={title}>
            <Text typo="title2" color="black">
              {`견적서 전송이 완료되었어요!\n응답이 도착하면 알려드릴게요`}
            </Text>
          </div>

          <div css={subtitle}>
            <Text typo="body9" color="gray500">
              알림톡으로 응답이 전송됩니다
            </Text>
          </div>

          <RoundButton service="partner" size="S" onClick={() => router.push(ROUTES.HOME)}>
            <Text typo="body4" color="white">
              메인으로
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
