import {
  AppBar,
  Layout,
  RoundButton,
  Text,
  TextButton,
  theme,
  useDialog,
} from '@daengle/design-system';
import {
  ButtonTextButtonArrow,
  DefaultProfile,
  Heart,
  Paw,
  ToolTip,
} from '@daengle/design-system/icons';
import { css } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { GROOMER_BADGES, ROUTES } from '~/constants/commons';
import { GetUserGroomerDetailRequestParams } from '~/models';
import {
  useGetChatStartQuery,
  useGetUserGroomerDetailQuery,
  useGetUserValidateQuery,
} from '~/queries';

export default function GroomerInfo() {
  const router = useRouter();
  const { groomerId } = router.query;
  const getGroomerId = Number(groomerId);
  const groomerParams: GetUserGroomerDetailRequestParams = { groomerId: getGroomerId };

  const [isChatStart, setIsChatStart] = useState<boolean>(false);
  const { open } = useDialog();

  const { data: groomerDetail } = useGetUserGroomerDetailQuery(groomerParams);
  const { data: chatStartInfo } = useGetChatStartQuery({
    params: { otherId: groomerDetail?.groomerAccountId ?? 0 },
    enabled: isChatStart,
  });

  const { data: isValidUser } = useGetUserValidateQuery();

  useEffect(() => {
    if (isChatStart && chatStartInfo) {
      router.push({
        pathname: ROUTES.CHATS_DETAIL(chatStartInfo.chatRoomId),
        query: { otherId: Number(groomerDetail?.groomerAccountId), service: 'groomer' },
      });

      setIsChatStart(false);
    }
  }, [isChatStart, chatStartInfo]);

  return (
    <Layout>
      <AppBar onBackClick={router.back} onHomeClick={() => router.push(ROUTES.HOME)} />
      <section css={topSection}>
        <Text typo="title1">상세보기</Text>
        <section css={groomerProfile}>
          {groomerDetail?.groomerImage ? (
            <Image
              src={groomerDetail?.groomerImage}
              alt="미용사 프로필 이미지"
              width={101}
              height={117}
              css={imageStyle}
            />
          ) : (
            <DefaultProfile width={101} height={117} css={imageStyle} />
          )}
          <div css={infoBox}>
            <Text typo="title2">{groomerDetail?.groomerName}</Text>
            <div css={tags}>
              {groomerDetail?.badges.map((badge) => (
                <Text typo="body12" color="blue200" css={tag}>
                  #{GROOMER_BADGES[badge]}
                </Text>
              ))}
            </div>
            <TextButton
              icons={{ suffix: <ButtonTextButtonArrow width={6} /> }}
              onClick={() => router.push(ROUTES.GROOMERS_SHOPS_DETAIL(groomerDetail?.shopId!))}
            >
              <Text typo="body9" color="gray500">
                {groomerDetail?.shopName}
              </Text>
            </TextButton>
          </div>
        </section>
        <section css={infoText}>
          <Text typo="body1">소개</Text>
          <Text typo="body10">
            {groomerDetail?.introduction
              ? groomerDetail?.introduction
              : '아직 등록된 소개글이 없어요'}
          </Text>
        </section>
        <section css={daengleMeter}>
          <div css={textBox}>
            <Text typo="body1">댕글미터</Text>
            <div css={toolTip}>
              <ToolTip width={14} />
              <div css={toolTipInfo}>
                <Text typo="body1">댕글미터란?</Text>
                <Text typo="body6">
                  댕글미터는 미용사가 반려견을 더 잘 이해하고 배려할수록 거리가 증가합니다. 거리는
                  미용사의 리뷰와 반려견과의 매칭 데이터를 기반으로 계산됩니다.
                </Text>
              </div>
            </div>
            <Text typo="body1" color="blue200" css={meter}>
              {groomerDetail?.daengleMeter}m
            </Text>
          </div>
          <div css={graph}>
            <div css={graphBar({ meter: groomerDetail?.daengleMeter ?? 0 })}>
              <Heart width={8} height={7} css={heart} />
            </div>
            <Paw width={9} height={7} css={paw} />
          </div>
        </section>
        <div css={button}>
          <RoundButton
            fullWidth={true}
            disabled={!isValidUser?.isValidateMember}
            onClick={
              isValidUser?.isValidateMember
                ? () => router.push(ROUTES.ESTIMATES_GROOMING(getGroomerId))
                : () =>
                    open({
                      title: '로그인 후 이용해 주세요',
                      primaryActionLabel: '로그인 하기',
                      onPrimaryAction: () => router.replace(ROUTES.LOGIN),
                      secondaryActionLabel: '닫기',
                    })
            }
          >
            바로 예약
          </RoundButton>
          <RoundButton
            disabled={!isValidUser?.isValidateMember}
            fullWidth={true}
            onClick={
              isValidUser?.isValidateMember
                ? () => setIsChatStart(true)
                : () =>
                    open({
                      title: '로그인 후 이용해 주세요',
                      primaryActionLabel: '로그인 하기',
                      onPrimaryAction: () => router.replace(ROUTES.LOGIN),
                      secondaryActionLabel: '닫기',
                    })
            }
            variant="primaryLow"
          >
            채팅하기
          </RoundButton>
        </div>
      </section>
      <section css={bottomSection}>
        <div css={menu} onClick={() => router.push(ROUTES.GROOMERS_REVIEWS(getGroomerId))}>
          <div css={review}>
            <Text typo="subtitle1">받은 리뷰</Text>
            <Text typo="subtitle1">{groomerDetail?.reviewCount}</Text>
          </div>
          <ButtonTextButtonArrow width={6} />
        </div>
        {groomerDetail?.instagram && (
          <div
            css={menu}
            onClick={() =>
              router.push(
                `${ROUTES.GROOMERS_PORFOLIO(getGroomerId)}?instagram=${groomerDetail?.instagram}`
              )
            }
          >
            <Text typo="subtitle1">포트폴리오</Text>
            <ButtonTextButtonArrow width={6} />
          </div>
        )}
      </section>
    </Layout>
  );
}

const topSection = css`
  border-bottom: 7px solid ${theme.colors.gray100};

  padding: 18px 18px 24px;
`;

const groomerProfile = css`
  display: flex;
  align-items: center;
  gap: 15px;

  width: 100%;
  height: 153px;
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
  border: 1px solid ${theme.colors.blue200};
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

const graphBar = ({ meter }: { meter: number }) => css`
  position: relative;

  width: ${meter}%;
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

const button = css`
  display: flex;
  justify-content: center;
  gap: 13px;
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
  gap: 14px;
  position: absolute;
  top: calc(100% + 8px);
  left: 100px;
  transform: translateX(-50%);
  z-index: 2;
  visibility: hidden;

  width: 322px;
  padding: 16px;
  border-radius: 12px;

  background-color: white;
  box-shadow: 0 0 6px rgb(0 0 6 / 10%);

  transition:
    opacity 0.2s ease,
    visibility 0.2s ease;
  opacity: 0;
`;

const bottomSection = css`
  padding: 0 18px;
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
