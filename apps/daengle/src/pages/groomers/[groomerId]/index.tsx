import { AppBar, Layout, RoundButton, Text, TextButton, theme } from '@daengle/design-system';
import { ButtonTextButtonArrow, DefaultProfile, ToolTip } from '@daengle/design-system/icons';
import { css } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants/commons';
import { GetUserGroomerDetailRequestParams } from '~/models/detail';
import { useGetUserGroomerDetailQuery } from '~/queries/detail';

export default function GroomerInfo() {
  const router = useRouter();
  const { groomerId } = router.query;
  const getGroomerId = Number(groomerId);
  const groomerParams: GetUserGroomerDetailRequestParams = { groomerId: getGroomerId };

  const { data: GroomerDetail } = useGetUserGroomerDetailQuery(groomerParams);

  console.log('GroomerDetail:', GroomerDetail);

  return (
    <Layout>
      <AppBar onBackClick={router.back} onHomeClick={() => router.push(ROUTES.HOME)} />
      <section css={topSection}>
        <Text typo="title1">상세보기</Text>
        <section css={groomerProfile}>
          {GroomerDetail?.groomerImage ? (
            <Image
              src={GroomerDetail?.groomerImage}
              alt="미용사 프로필이미지"
              width={101}
              height={117}
              css={imageStyle}
            />
          ) : (
            <DefaultProfile width={101} height={117} css={imageStyle} />
          )}
          <div css={infoBox}>
            <Text typo="title2">{GroomerDetail?.groomerName}</Text>
            <div css={tags}>
              <Text typo="body12" color="blue200" css={tag}>
                {/*  TODO: keywords DB에 값 넣고 연동하기 */}
                #대형견
              </Text>
              <Text typo="body12" color="blue200" css={tag}>
                #노견
              </Text>
            </div>
            <TextButton
              icons={{ suffix: <ButtonTextButtonArrow width={6} /> }}
              onClick={() => router.push(ROUTES.GROOMER_SHOP_DETAIL(getGroomerId))}
            >
              <Text typo="body9" color="gray500">
                {GroomerDetail?.shopName}
              </Text>
            </TextButton>
          </div>
        </section>
        <section css={infoText}>
          <Text typo="body1">소개</Text>
          <Text typo="body10">{GroomerDetail?.introduction}</Text>
        </section>
        <section css={daengleMeter}>
          <div css={textBox}>
            <Text typo="body1">댕글미터</Text>
            <ToolTip width={14} />
            <Text typo="body1" color="red200" css={meter}>
              {GroomerDetail?.daengleMeter}m
            </Text>
          </div>
          <div css={graph} />
        </section>
        <div css={button}>
          <RoundButton
            fullWidth={true}
            onClick={() => router.push(ROUTES.ESTIMATE_GROOMING(getGroomerId))}
          >
            바로 예약
          </RoundButton>
          <RoundButton
            fullWidth={true}
            onClick={() => router.push(ROUTES.CHATS_DETAIL(getGroomerId))}
          >
            채팅하기
          </RoundButton>
        </div>
      </section>
      <section css={bottomSection}>
        <div css={menu} onClick={() => router.push(ROUTES.GROOMER_REVIEWS(getGroomerId))}>
          <div css={review}>
            <Text typo="subtitle1">받은 리뷰</Text>
            <Text typo="subtitle1">{GroomerDetail?.reviewCount}</Text>
          </div>
          <ButtonTextButtonArrow width={6} />
        </div>
        <div css={line} />
        <div css={menu}>
          {/* TODO: 인스타 api연동 */}
          <Text typo="subtitle1">포트폴리오</Text>
          <ButtonTextButtonArrow width={6} />
        </div>
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
  width: 100%;
  height: 14px;
  border-radius: 10px;

  background-color: ${theme.colors.gray100};
`;

const button = css`
  display: flex;
  justify-content: center;
  gap: 13px;
`;

const daengleMeter = css`
  display: flex;
  flex-direction: column;
  gap: 11px;

  margin-bottom: 32px;
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

  padding: 24px 0;

  cursor: pointer;
`;

const review = css`
  display: flex;
  gap: 4px;
`;
