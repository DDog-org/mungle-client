import { AppBar, Layout, Text, theme } from '@daengle/design-system';
import {
  ButtonTextButtonArrow,
  DetailCall,
  DetailLocation,
  DetailTime,
  ToolTip,
  Heart,
  Paw,
} from '@daengle/design-system/icons';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { GNB } from '~/components/commons';
import { ROUTES } from '~/constants/commons';
import { useGetVetInfoQuery } from '~/queries';

export default function VetProfile() {
  const [imageUrl, setImageUrl] = useState<string>();
  const router = useRouter();

  const { data: getVetInfo } = useGetVetInfoQuery();

  const dayMapping: { [key: string]: string } = {
    MONDAY: '월',
    TUESDAY: '화',
    WEDNESDAY: '수',
    THURSDAY: '목',
    FRIDAY: '금',
    SATURDAY: '토',
    SUNDAY: '일',
  };

  const closedDays = getVetInfo?.closedDays?.map((day) => dayMapping[day] || day).join(', ');

  useEffect(() => {
    if (getVetInfo?.imageUrls) {
      setImageUrl(getVetInfo?.imageUrls[0]);
    }
  }, [getVetInfo]);

  return (
    <Layout isAppBarExist={false}>
      <AppBar onBackClick={router.back} onHomeClick={() => router.push(ROUTES.HOME)} />
      <div css={wrapper}>
        <div css={imageSection(imageUrl || '')}>
          <Text typo="title2" color="white" css={vetName}>
            {getVetInfo?.name}
          </Text>
          <div css={tags}>
            <Text typo="body12" color="white" css={tag}>
              #대형견
            </Text>
            <Text typo="body12" color="white" css={tag}>
              #노견
            </Text>
          </div>
        </div>
        <div css={infoBox}>
          <section css={topSection}>
            <section css={infoSection}>
              <div css={time}>
                <DetailTime width={20} />
                <Text typo="body9">
                  {closedDays || '매일'} {getVetInfo?.startTime} - {getVetInfo?.endTime}
                </Text>
              </div>
              <div css={call}>
                <DetailCall width={20} />
                <Text typo="body9">{getVetInfo?.phoneNumber}</Text>
              </div>
              <div css={address}>
                <DetailLocation width={20} />
                <Text typo="body9">
                  {getVetInfo?.address} {getVetInfo?.detailAddress}
                </Text>
              </div>
            </section>
            <section css={infoText}>
              <Text typo="body1">소개</Text>
              <Text typo="body10">{getVetInfo?.introduction}</Text>
            </section>
            <section css={daengleMeter}>
              <div css={textBox}>
                <Text typo="body1">댕글미터</Text>
                <div css={toolTip}>
                  <ToolTip width={14} />
                  <div css={toolTipInfo}>
                    <Text typo="body6">댕글미터란?</Text>
                    <Text typo="body7">
                      댕글미터는 미용사가 반려견을 더 잘 이해하고 배려할수록 거리가 증가합니다.
                      거리는 미용사의 리뷰와 반려견과의 매칭 데이터를 기반으로 계산됩니다.
                    </Text>
                  </div>
                </div>
                <Text typo="body1" color="red200" css={meter}>
                  {getVetInfo?.daengleMeter}m
                </Text>
              </div>
              <div css={graph}>
                <div css={graphBar}>
                  <Heart width={8} height={7} css={heart} />
                </div>
                <Paw width={9} height={7} css={paw} />
              </div>
            </section>
          </section>
          <section css={bottomSection}>
            <div css={menu} onClick={() => router.push(ROUTES.MYPAGE_EDIT)}>
              <Text typo="body4">병원 프로필 관리</Text>
              <ButtonTextButtonArrow width={6} />
            </div>
            <div css={menu} onClick={() => router.push(ROUTES.MYPAGE_REVIEWS)}>
              <Text typo="body4">리뷰 관리</Text>
              <ButtonTextButtonArrow width={6} />
            </div>
            <div css={menu}>
              <Text typo="body4">회원 탈퇴</Text>
              <ButtonTextButtonArrow width={6} />
            </div>
          </section>
        </div>
      </div>
      <GNB />
    </Layout>
  );
}

const wrapper = css`
  position: relative;

  width: 100%;
  height: 100%;
  padding: 0 0 55px;

  background-color: black;
`;

const imageSection = (imageUrl: string) => css`
  position: relative;

  width: 100%;
  height: 284px;

  background-image: url(${imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const vetName = css`
  position: absolute;
  bottom: 110px;
  left: 50%;
  transform: translate(-50%);
`;

const tags = css`
  display: flex;
  gap: 6px;
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translate(-50%);
`;

const tag = css`
  padding: 6px 16px;
  border: 1px solid ${theme.colors.white};
  border-radius: 14px;
`;

const topSection = css`
  border-bottom: 7px solid ${theme.colors.gray100};

  padding: 32px 18px 0;
`;

const infoBox = css`
  position: absolute;
  bottom: 0;
  overflow-y: scroll;

  width: 100%;
  height: 532px;
  padding-bottom: 55px;
  border-radius: 20px 20px 0 0;

  background-color: white;
`;

const infoSection = css`
  display: flex;
  flex-direction: column;
  gap: 11px;

  & + & {
    border-top: 1px solid ${theme.colors.gray100};
  }
`;

const time = css`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const call = css`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const address = css`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-bottom: 24px;
`;

const infoText = css`
  display: flex;
  flex-direction: column;
  gap: 11px;

  margin: 24px 0;
`;

const graph = css`
  position: relative;
  overflow: hidden;

  width: 100%;
  height: 15px;
  border-radius: 10px;

  background-color: ${theme.colors.gray200};
`;

const graphBar = css`
  position: relative;

  width: 30%;
  height: 100%;

  background: linear-gradient(0.25turn, ${theme.colors.blue100}, ${theme.colors.blue200});

  transition: width 0.3s ease;
  clip-path: inset(0 0 0 0 round 10px);
`;

const heart = css`
  position: absolute;
  top: 4px;
  right: 6px;
`;

const paw = css`
  position: absolute;
  top: 4px;
  right: 6px;
  fill: ${theme.colors.gray600};
`;

const daengleMeter = css`
  display: flex;
  flex-direction: column;
  gap: 15px;

  margin-bottom: 32px;
`;

const toolTip = css`
  display: flex;
  position: relative;

  cursor: pointer;

  &:hover > div {
    opacity: 1;

    visibility: visible;
  }
`;

const toolTipInfo = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: calc(100% + 8px);
  left: 100px;
  transform: translateX(-50%);
  z-index: 2;
  visibility: hidden;

  width: 280px;
  padding: 16px;
  border-radius: 12px;

  background-color: white;
  box-shadow: 0 0 6px rgb(0 0 6 / 10%);

  transition:
    opacity 0.2s ease,
    visibility 0.2s ease;
  opacity: 0;
`;
const textBox = css`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const meter = css`
  margin-left: 6px;
`;

const button = css`
  display: flex;
  justify-content: center;
  gap: 13px;

  margin-bottom: 24px;
`;

const bottomSection = css`
  padding: 0 18px;
`;

const menu = css`
  display: flex;
  justify-content: space-between;

  padding: 24px 0;

  cursor: pointer;
`;

const review = css`
  display: flex;
  gap: 4px;
`;

const line = css`
  height: 1px;

  background-color: ${theme.colors.gray100};
`;
