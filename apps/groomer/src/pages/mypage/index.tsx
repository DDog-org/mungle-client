import { useRouter } from 'next/router';
import { Layout, Text, TextButton, theme, useDialog } from '@daengle/design-system';
import {
  ButtonTextButtonArrow,
  DefaultProfile,
  Heart,
  Paw,
  ToolTip,
} from '@daengle/design-system/icons';
import { css } from '@emotion/react';
import { ROUTES } from '~/constants';
import { GNB } from '~/components/commons';
import Image from 'next/image';
import {
  useDeleteGroomerMutation,
  useGetGroomerInfoQuery,
  useGetGroomerWithdrawInfoQuery,
} from '~/queries';

export default function GroomerInfo() {
  const { data: getGroomerInfo } = useGetGroomerInfoQuery();
  const { data: getGroomerWithdrawInfo } = useGetGroomerWithdrawInfoQuery();
  const { mutateAsync: deleteGroomer } = useDeleteGroomerMutation();

  const router = useRouter();

  const { open } = useDialog();

  return (
    <Layout isAppBarExist={false}>
      <section css={topSection}>
        <Text typo="title1">마이</Text>
        <section css={groomerProfile}>
          {getGroomerInfo?.imageUrl ? (
            <Image
              src={getGroomerInfo?.imageUrl}
              alt="미용사 프로필이미지"
              width={101}
              height={117}
              css={imageStyle}
            />
          ) : (
            <DefaultProfile width={101} height={117} css={imageStyle} />
          )}
          <div css={infoBox}>
            <Text typo="title2">{getGroomerInfo?.name} 디자이너</Text>
            <div css={tags}>
              {/* TODO: 뱃지 api 수정 후 연동 */}
              <Text typo="body12" color="green200" css={tag}>
                #대형견
              </Text>
              <Text typo="body12" color="green200" css={tag}>
                #노견
              </Text>
            </div>
            <TextButton icons={{ suffix: <ButtonTextButtonArrow width={6} /> }}>
              <Text typo="body9" color="gray500">
                {getGroomerInfo?.shopName}
              </Text>
            </TextButton>
          </div>
        </section>
        <section css={infoText}>
          <Text typo="body1">소개</Text>
          <Text typo="body10">{getGroomerInfo?.introduction}</Text>
        </section>
        <section css={daengleMeter}>
          <div css={textBox}>
            <Text typo="body1">댕글미터</Text>
            <div css={toolTip}>
              <ToolTip width={14} />
              <div css={toolTipInfo}>
                <Text typo="body6">댕글미터란?</Text>
                <Text typo="body7">
                  댕글미터는 미용사가 반려견을 더 잘 이해하고 배려할수록 거리가 증가합니다. 거리는
                  미용사의 리뷰와 반려견과의 매칭 데이터를 기반으로 계산됩니다.
                </Text>
              </div>
            </div>

            <Text typo="body1" color="red200" css={meter}>
              {getGroomerInfo?.daengleMeter}m
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
        <div css={line} />
        <div css={menu} onClick={() => router.push(ROUTES.MYPAGE_PROFILE)}>
          <Text typo="body4">프로필 관리</Text>
          <ButtonTextButtonArrow width={6} />
        </div>
        <div css={menu} onClick={() => router.push(ROUTES.MYPAGE_REVIEWS)}>
          <Text typo="body4">리뷰 관리</Text>
          <ButtonTextButtonArrow width={6} />
        </div>
        <div css={menu} onClick={() => router.push(ROUTES.MYPAGE_MY_SHOP)}>
          <Text typo="body4">마이샵 관리</Text>
          <ButtonTextButtonArrow width={6} />
        </div>
        <div
          css={menu}
          onClick={() => {
            const waitingForServiceCount = getGroomerWithdrawInfo?.waitingForServiceCount;
            open({
              title: '회원 탈퇴',
              description: waitingForServiceCount
                ? `현재 예약 중인 서비스가 ${waitingForServiceCount}건 있습니다.\n탈퇴 시 고객의 예약금은 전액환불 처리됩니다.`
                : '정말로 탈퇴하시겠습니까?',
              primaryActionLabel: '탈퇴하기',
              onPrimaryAction: deleteGroomer,
            });
          }}
        >
          <Text typo="body4">회원 탈퇴</Text>
          <ButtonTextButtonArrow width={6} />
        </div>
      </section>
      <GNB />
    </Layout>
  );
}

const topSection = css`
  border-bottom: 7px solid ${theme.colors.gray100};

  padding: 38px 18px 0;
`;

const groomerProfile = css`
  display: flex;
  align-items: center;
  gap: 15px;

  width: 100%;
  padding: 24px 0;
`;

const imageStyle = css`
  border-radius: 86px 86px 0 0;

  background-color: ${theme.colors.gray200};
`;

const infoBox = css`
  display: flex;
  flex-direction: column;

  margin-top: 25px;
`;

const tags = css`
  display: flex;
  gap: 6px;

  margin: 6px 0 8px;
`;

const tag = css`
  padding: 4px 12px;
  border: 1px solid ${theme.colors.green200};
  border-radius: 14px;
`;

const infoText = css`
  display: flex;
  flex-direction: column;
  gap: 11px;

  margin-bottom: 24px;
`;

const meter = css`
  margin-left: 6px;
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

  margin: 24px 0 32px;
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

const line = css`
  height: 1px;

  background-color: ${theme.colors.gray100};
`;

const bottomSection = css`
  padding: 0 18px;
`;

const menu = css`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.colors.gray100};

  padding: 24px 0;

  cursor: pointer;
`;

const review = css`
  display: flex;
  gap: 4px;
`;
