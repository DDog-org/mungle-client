import { AppBar, Layout, RoundButton, Text, theme } from '@daengle/design-system';
import { TransmissionComplete } from '@daengle/design-system/icons';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants/commons';

export default function EstimateComplete() {
  const router = useRouter();

  return (
    <Layout>
      <AppBar prefix={<></>} suffix={<></>} />
      <div css={wrapper}>
        <div css={box}>
          <TransmissionComplete width={90} height={90} color={theme.colors.blue200} />
          <section css={textSection}>
            <Text tag="h1" typo="title2">
              견적 요청이 완료되었어요!
            </Text>
            <Text tag="h2" typo="body9" color="gray500">
              견적서가 도착하면 알려드릴게요
            </Text>
          </section>
          <RoundButton
            size="S"
            variant="primary"
            css={button}
            onClick={() => {
              router.push(ROUTES.ESTIMATES);
            }}
          >
            돌아가기
          </RoundButton>
        </div>
      </div>
    </Layout>
  );
}

//////////// emotion(css) //////////

export const wrapper = css`
  margin: auto;
`;

export const box = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const textSection = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const button = css`
  cursor: pointer;
`;
