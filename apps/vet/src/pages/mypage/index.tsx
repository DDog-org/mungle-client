import { AppBar, Layout, Text, theme } from '@daengle/design-system';
import {
  ButtonTextButtonArrow,
  DetailCall,
  DetailLocation,
  DetailTime,
  ToolTip,
} from '@daengle/design-system/icons';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { GNB } from '~/components/commons';
import { ROUTES } from '~/constants/commons';

export default function VetProfile() {
  const router = useRouter();

  return (
    <Layout isAppBarExist={false}>
      <AppBar onBackClick={router.back} onHomeClick={() => router.push(ROUTES.HOME)} />
      <div css={wrapper}>
        <div css={imageSection}>
          <Text typo="title2" color="white" css={vetName}>
            다고쳐 댕댕병원
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
                <Text typo="body9">매일 10:00 - 20:00</Text>
              </div>
              <div css={call}>
                <DetailCall width={20} />
                <Text typo="body9">02-000-0000</Text>
              </div>
              <div css={address}>
                <DetailLocation width={20} />
                <Text typo="body9">서울특별시 강남구 언주로152길 10</Text>
              </div>
            </section>
            <section css={infoText}>
              <Text typo="body1">소개</Text>
              <Text typo="body10">
                사랑하는 반려동물의 건강을 책임지는 든든한 동반자
                <br />
                정성과 전문성으로 반려동물에게 최상의 진료를 제공합니다.
              </Text>
            </section>
            <section css={daengleMeter}>
              <div css={textBox}>
                <Text typo="body1">댕글미터</Text>
                <ToolTip width={14} />
                <Text typo="body1" color="red200" css={meter}>
                  43m
                </Text>
              </div>
              <div css={graph} />
            </section>
          </section>
          <section css={bottomSection}>
            <div css={menu}>
              <Text typo="body4">병원 프로필 관리</Text>
              <ButtonTextButtonArrow width={6} />
            </div>
            <div css={menu}>
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

  /* overflow: hidden; */

  width: 100%;
  height: 100%;
  padding: 0 0 55px;

  background-color: black;
`;

const imageSection = css`
  position: relative;

  width: 100%;
  height: 284px;

  background-image: url('/icons/pet-profile/edit_image.jpeg');
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
  overflow-y: auto;

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
  border-bottom: 1px solid ${theme.colors.gray100};
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

const daengleMeter = css`
  display: flex;
  flex-direction: column;
  gap: 15px;

  margin-bottom: 32px;
`;

const textBox = css`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const meter = css`
  margin-left: 6px;
`;

const graph = css`
  width: 100%;
  height: 14px;
  border-radius: 10px;

  background-color: ${theme.colors.gray200};
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
