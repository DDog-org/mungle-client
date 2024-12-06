import { useRouter } from 'next/router';
import { Layout, RoundButton, Text } from '@daengle/design-system';
import { TransmissionComplete } from '@daengle/design-system/icons';
import { ROUTES } from '~/constants/commons/routes';
import { content, subtitle, title, wrapper } from './index.styles';

export default function Pending() {
  const router = useRouter();

  return (
    <Layout>
      <section css={wrapper}>
        <div css={content}>
          <TransmissionComplete />

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
