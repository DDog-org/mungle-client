import { useRouter } from 'next/router';
import { Layout, Text, TextButton, theme, useDialog, useToast } from '@daengle/design-system';
import {
  ButtonTextButtonArrow,
  DefaultProfile,
  Heart,
  GrayPaw,
  ToolTip,
} from '@daengle/design-system/icons';
import { css } from '@emotion/react';
import { GROOMER_BADGES, ROUTES } from '~/constants';
import { GNB } from '~/components/commons';
import Image from 'next/image';
import {
  useDeleteGroomerMutation,
  useGetGroomerProfileQuery,
  useGetGroomerWithdrawInfoQuery,
} from '~/queries';
import { Tab } from '~/components/mypage/tab';
import { useState } from 'react';

export default function GroomerInfo() {
  const [isWithdrawTabClick, setIsWithdrawTabClick] = useState<boolean>(false);
  const { data: getGroomerProfile } = useGetGroomerProfileQuery();
  const { data: getGroomerWithdrawInfo } = useGetGroomerWithdrawInfoQuery({
    enable: isWithdrawTabClick,
  });
  const { mutateAsync: deleteGroomer } = useDeleteGroomerMutation();

  const router = useRouter();

  const { showToast } = useToast();
  const { open } = useDialog();

  if (!getGroomerProfile?.shopId) return;

  return (
    <Layout isAppBarExist={false}>
      <section css={topSection}>
        <Text typo="title1">마이</Text>
        <section css={groomerProfile}>
          {getGroomerProfile?.imageUrl ? (
            <Image
              src={getGroomerProfile?.imageUrl}
              alt="미용사 프로필이미지"
              width={101}
              height={117}
              css={imageStyle}
            />
          ) : (
            <DefaultProfile width={101} height={117} css={imageStyle} />
          )}
          <div css={infoBox}>
            <Text typo="title2">{getGroomerProfile?.name} 디자이너</Text>
            <div css={tags}>
              {getGroomerProfile.badges.map((badge) => (
                <Text tag="span" typo="body12" color="green200" css={tag}>
                  #{GROOMER_BADGES[badge]}
                </Text>
              ))}
            </div>
            <TextButton
              icons={{ suffix: <ButtonTextButtonArrow width={6} /> }}
              onClick={() => router.push(ROUTES.MYPAGE_SHOP(getGroomerProfile?.shopId))}
            >
              <Text tag="span" typo="body9" color="gray500">
                {getGroomerProfile?.shopName}
              </Text>
            </TextButton>
          </div>
        </section>
        <section css={infoText}>
          <Text typo="body1">소개</Text>
          <Text typo="body10">
            {getGroomerProfile?.introduction
              ? getGroomerProfile?.introduction
              : '아직 작성된 소개글이 없어요'}
          </Text>
        </section>
        <section css={daengleMeter}>
          <div css={textBox}>
            <Text tag="span" typo="body1">
              댕글미터
            </Text>
            <div css={toolTip}>
              <ToolTip width={14} />
              <div css={toolTipInfo}>
                <Text tag="span" typo="body6">
                  댕글미터란?
                </Text>
                <Text tag="span" typo="body7">
                  댕글미터는 미용사가 반려견을 더 잘 이해하고 배려할수록 거리가 증가합니다. 거리는
                  미용사의 리뷰와 반려견과의 매칭 데이터를 기반으로 계산됩니다.
                </Text>
              </div>
            </div>

            <Text typo="body1" color="green200" css={meter}>
              {getGroomerProfile?.daengleMeter}m
            </Text>
          </div>
          <div css={graph}>
            <div css={graphBar(getGroomerProfile.daengleMeter)}>
              <Heart width={8} height={7} css={heart} />
            </div>
            <GrayPaw width={9} height={7} css={paw} />
          </div>
        </section>
      </section>
      <section css={bottomSection}>
        <div css={line} />
        <div css={menu} onClick={() => router.push(ROUTES.MYPAGE_PROFILE)}>
          <Text tag="span" typo="body4">
            프로필 관리
          </Text>
          <ButtonTextButtonArrow width={6} />
        </div>
        <div css={menu} onClick={() => router.push(ROUTES.MYPAGE_REVIEWS)}>
          <Text tag="span" typo="body4">
            리뷰 관리
          </Text>
          <ButtonTextButtonArrow width={6} />
        </div>
        <div css={menu} onClick={() => router.push(ROUTES.MYPAGE_SHOP_EDIT)}>
          <Text tag="span" typo="body4">
            마이샵 관리
          </Text>
          <ButtonTextButtonArrow width={6} />
        </div>
        <Tab
          isArrow={false}
          variant="ghost"
          title="회원 탈퇴"
          onClick={() => {
            setIsWithdrawTabClick(true);
            const waitingForServiceCount = getGroomerWithdrawInfo?.waitingForServiceCount;

            open({
              type: 'warn',
              title: '회원 탈퇴',
              description: waitingForServiceCount
                ? `현재 예약 중인 서비스가 ${waitingForServiceCount}건 있어요.\n탈퇴 시 고객의 예약금은 전액환불 처리됩니다.`
                : '정말로 탈퇴하시겠어요?\n탈퇴된 계정은 다시 복구할 수 없어요',
              primaryActionLabel: '탈퇴하기',
              onPrimaryAction: async () => {
                await deleteGroomer();
                localStorage.clear();
                router.push(ROUTES.LOGIN);
                showToast({ title: '탈퇴 처리가 완료되었어요. 다음에 다시 만나요🐾' });
              },
              secondaryActionLabel: '취소',
            });
          }}
        />
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

  img {
    object-fit: cover;
  }
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

const graphBar = (daengleMeter: number) => css`
  position: relative;
  z-index: 3;

  width: ${daengleMeter}%;
  height: 100%;

  background: linear-gradient(0.25turn, ${theme.colors.green100}, ${theme.colors.green200});

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
  z-index: 10;
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
  padding: 0 18px calc(${theme.size.gnbHeight} + 18px) 18px;
`;

const menu = css`
  display: flex;
  justify-content: space-between;

  padding: 24px 0;

  cursor: pointer;

  & + & {
    border-top: 1px solid ${theme.colors.gray100};
  }
`;

const review = css`
  display: flex;
  gap: 4px;
`;
