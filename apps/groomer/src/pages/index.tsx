import { css } from '@emotion/react';
import { AppBar, Layout, Text, theme } from '@daengle/design-system';
import { AppBarPartnerLogo } from '@daengle/design-system/icons';
import { GNB } from '~/components/commons';
import { ReservationItem } from '~/components/home';

export default function Home() {
  return (
    <Layout isAppBarExist={false}>
      <AppBar
        prefix={
          <div css={logoWrapper}>
            <AppBarPartnerLogo width="95px" />
          </div>
        }
        suffix={<></>}
      />

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
            <div css={requestInfo}>
              <Text typo="body5" color="gray600">
                전체
              </Text>
              <Text typo="title2" color="green200">
                5
              </Text>
            </div>
            <div css={requestInfo}>
              <Text typo="body5" color="gray600">
                지정 요청
              </Text>
              <Text typo="title2" color="green200">
                5
              </Text>
            </div>
            <div css={requestInfo}>
              <Text typo="body5" color="gray600">
                예약
              </Text>
              <Text typo="title2" color="green200">
                5
              </Text>
            </div>
          </div>
        </div>

        <div css={sheet}>
          <Text typo="subtitle1" color="black">
            오늘의 예약
          </Text>

          <div css={reservationWrapper}>
            <ReservationItem />
            <ReservationItem />
            <ReservationItem />
            <ReservationItem />
            <ReservationItem />
            <ReservationItem />
          </div>
        </div>
      </section>

      <GNB />
    </Layout>
  );
}

const logoWrapper = css`
  padding: 6px 0 0 10px;
`;

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
  gap: 13px;
  overflow-y: auto;

  width: 100%;
  margin: 16px 0 0;
  padding: 0 0 ${theme.size.gnbHeight} 0;
`;
