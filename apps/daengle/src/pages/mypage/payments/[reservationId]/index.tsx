import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { css } from '@emotion/react';
import { AppBar, Layout, RoundButton, Text, theme } from '@daengle/design-system';
import { formatPhoneNumber } from '@daengle/services/utils';
import { ROUTES } from '~/constants/commons';
import { useGetPaymentHistoryQuery } from '~/queries';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

export default function PaymentsDetail() {
  const router = useRouter();
  const params = useSearchParams();
  const tab = params.get('tab');

  const reservationId = Number(router.query.reservationId);
  const { data } = useGetPaymentHistoryQuery(reservationId);

  // TODO: loading, error 처리
  if (!data) return <></>;

  const {
    reservationStatus,
    recipientName,
    shopName,
    schedule,
    deposit,
    customerName,
    customerPhoneNumber,
    visitorName,
    visitorPhoneNumber,
  } = data;

  return (
    <Layout>
      <AppBar />
      <div css={wrapper}>
        <section css={top}>
          <Text tag="h1" typo="title1" color="black">
            결제 상세 내역
          </Text>
          <div css={detailInfoWrapper}>
            <div css={detailInfo}>
              <Text typo="title2" color="blue200">
                {dayjs(schedule).format('YY년 MM월 DD일')}
              </Text>
              <Text typo="body8" color="gray500">
                {dayjs(schedule).locale('ko').format('dddd • HH:mm')}
              </Text>
            </div>
            <div css={detailInfo}>
              <Text typo="subtitle1" color="black">
                {`${recipientName}${tab === 'groomer' && ' 디자이너'}`}
              </Text>
              <Text typo="body9" color="gray400">
                {shopName}
              </Text>
            </div>
          </div>
          <div css={buttonWrapper}>
            <Text tag="h2" typo="body11" color="gray300">
              이 날 받은 서비스는 어땠나요? 리뷰를 남겨보세요
            </Text>
            {/* TODO: reservationStatus 값에 따라 버튼 활성화 여부 설정 */}
            <RoundButton size="L" onClick={() => router.push(ROUTES.MYPAGE_REVIEWS)}>
              리뷰 남기기
            </RoundButton>
          </div>
        </section>

        <hr css={border} />

        <section css={paymentInfoWrapper}>
          <Text tag="h2" typo="title2" color="black">
            결제 정보
          </Text>
          <div css={paymentInfo}>
            <Text typo="subtitle3" color="black">
              예약금
            </Text>
            <Text typo="subtitle1" color="black">
              {deposit.toLocaleString()}원
            </Text>
          </div>
        </section>

        <hr css={border} />

        <section css={reserverInfoWrapper}>
          <Text tag="h2" typo="title2" color="black">
            예약자 정보
          </Text>
          <div css={reserverInfo}>
            <Text typo="subtitle3" color="black">
              {customerName}
            </Text>
            <Text typo="body8" color="black">
              {formatPhoneNumber(customerPhoneNumber)}
            </Text>
          </div>
          <div css={reserverInfo}>
            <Text typo="subtitle3" color="black">
              {visitorName}
            </Text>
            <Text typo="body8" color="black">
              {formatPhoneNumber(visitorPhoneNumber)}
            </Text>
          </div>
        </section>
      </div>
    </Layout>
  );
}

const wrapper = css`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const top = css`
  width: 100%;
  padding: 18px;
`;

const detailInfoWrapper = css`
  display: flex;
  align-items: center;

  margin: 28px 0 0;
`;

const detailInfo = css`
  display: flex;
  flex-direction: column;
  gap: 2px;

  padding: 5px 0;

  & + & {
    margin-left: 18px;
    padding: 5px 18px;
    border-left: 1px solid ${theme.colors.gray400};
  }
`;

const buttonWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  margin: 35px 0 6px;
`;

const border = css`
  width: 100%;
  height: 8px;

  background: ${theme.colors.gray100};
`;

const paymentInfoWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 32px 18px;
`;

const paymentInfo = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

const reserverInfoWrapper = css`
  width: 100%;
  padding: 32px 18px 0;
`;

const reserverInfo = css`
  display: flex;
  flex-direction: column;
  gap: 6px;

  width: 100%;
  padding: 24px 0;

  & + & {
    border-top: 0.5px solid ${theme.colors.gray200};
  }
`;
