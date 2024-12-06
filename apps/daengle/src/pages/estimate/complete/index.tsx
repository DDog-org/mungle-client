import { AppBar, Layout, RoundButton, Text } from '@daengle/design-system';
import { wrapper, box, button, textSection } from './index.styles';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function EstimateComplete() {
  const router = useRouter();

  return (
    <Layout>
      <AppBar />
      <div css={wrapper}>
        <div css={box}>
          <Image src="/icons/check_icon.svg" alt="checkIcon" width={90} height={90} />
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
              router.push({ pathname: '/user/estimate/list' });
            }}
          >
            돌아가기
          </RoundButton>
        </div>
      </div>
    </Layout>
  );
}
