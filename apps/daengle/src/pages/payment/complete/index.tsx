import { AppBar, Layout, RoundButton, Text, theme } from '@daengle/design-system';
import { css } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function PaymentComplete() {
  const router = useRouter();

  return (
    <Layout>
      <AppBar />
      <div css={wrapper}>
        <section css={section}>
          <Image src="/icons/check_icon.svg" alt="checkIcon" width={90} height={90} />
          <Text tag="h1" typo="title2">
            예약이 확정되었어요!
          </Text>
        </section>
        <section css={reservationDetail}>
          <Text typo="title2">문소연 디자이너</Text>
          <Text typo="body9" color="gray400" css={shopName}>
            꼬꼬마 관리샵
          </Text>
          <div css={schedule}>
            <Text typo="body4" color="gray400">
              일정
            </Text>
            <Text typo="body4">2024.11.17 • 14:00</Text>
          </div>
        </section>
        <RoundButton size="S">예약 내역 보기</RoundButton>
      </div>
    </Layout>
  );
}

////////////emotion(css)/////////////

const wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  margin: auto;
`;

const section = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const reservationDetail = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 357px;
  height: 117px;
  padding: 18px;
  border: 1px solid ${theme.colors.gray200};
  border-radius: 21px;
`;

const shopName = css`
  margin-top: 6px;
`;

const schedule = css`
  display: flex;
  gap: 16px;

  margin-top: 15px;
`;
