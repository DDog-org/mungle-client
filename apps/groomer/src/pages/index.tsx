import { css } from '@emotion/react';
import { AppBar, Empty, Layout, Text, theme, useDialog } from '@daengle/design-system';
import { AppBarPartnerLogo } from '@daengle/design-system/icons';
import { GNB } from '~/components/commons';
import { ReservationItem } from '~/components/home';
import { useGetGroomerSchedule, useGetGroomerValidateQuery } from '~/queries';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const { data: schedule } = useGetGroomerSchedule();

  const { data } = useGetGroomerValidateQuery();

  const { open } = useDialog();

  useEffect(() => {
    if (data?.isValidateMember === false) {
      open({
        title: '로그인 후 이용 가능합니다',
        primaryActionLabel: '로그인 하기',
      });

      router.replace(ROUTES.LOGIN);
    }
  }, [data?.isValidateMember]);

  return (
    <Layout isAppBarExist={false}>
      <AppBar prefix={<AppBarPartnerLogo width="95px" />} suffix={<></>} />

      <section css={wrapper}>
        <div css={top}>
          <div css={titleWrapper}>
            <Text tag="h1" typo="title1" color="white">
              받은 요청
            </Text>
            <Text typo="body4" color="white">
              요청을 확인하고, 견적을 보내 보세요
            </Text>
          </div>

          <div css={requestInfoWrapper}>
            <div css={requestInfo} onClick={() => router.push(ROUTES.ESTIMATES)}>
              <Text typo="body5" color="gray600">
                전체
              </Text>
              <Text typo="title2" color="green200">
                {schedule?.totalScheduleCount}
              </Text>
            </div>
            <div
              css={requestInfo}
              onClick={() =>
                router.push({
                  pathname: ROUTES.ESTIMATES,
                  query: { tab: 'designation' },
                })
              }
            >
              <Text typo="body5" color="gray600">
                지정 요청
              </Text>
              <Text typo="title2" color="green200">
                {schedule?.designationCount}
              </Text>
            </div>
            <div css={requestInfo} onClick={() => router.push(ROUTES.RESERVATIONS)}>
              <Text typo="body5" color="gray600">
                예약
              </Text>
              <Text typo="title2" color="green200">
                {schedule?.totalReservationCount}
              </Text>
            </div>
          </div>
        </div>

        <div css={sheet}>
          <Text typo="subtitle1" color="black">
            오늘의 예약
          </Text>

          <div css={reservationWrapper}>
            {!schedule || schedule.todayAllReservations.length === 0 ? (
              <Empty title="오늘은 예약이 없어요" />
            ) : (
              schedule?.todayAllReservations.map((reservation) => (
                <ReservationItem key={reservation.petId} reservation={reservation} />
              ))
            )}
          </div>
        </div>
      </section>

      <GNB />
    </Layout>
  );
}

const wrapper = css`
  display: flex;
  flex-direction: column;
  gap: 31px;

  width: 100%;
  height: 100%;
  padding: calc(${theme.size.appBarHeight} + 30px) 0 0 0;

  background: ${theme.colors.greenGradient100};
`;

const top = css`
  width: 100%;
  padding: 0 18px;
`;

const titleWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const requestInfoWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin: 15px 0 0;
  padding: 22px 18px;
  border-radius: 50px;

  background: ${theme.colors.white};
`;

const requestInfo = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  width: 33%;

  cursor: pointer;

  & + & {
    border-left: 1px solid ${theme.colors.gray200};
  }
`;

const sheet = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;

  width: 100%;
  height: 100%;
  padding: 24px 18px;
  border-radius: 30px 30px 0 0;

  background: ${theme.colors.white};
`;

const reservationWrapper = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 13px;
  overflow-y: auto;

  width: 100%;
  margin: 16px 0 0;
  padding: 0 0 ${theme.size.gnbHeight} 0;
`;
