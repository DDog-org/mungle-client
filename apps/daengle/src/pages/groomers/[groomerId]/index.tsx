// 미용사 상세정보

import { AppBar, Layout, RoundButton, Text, TextButton, theme } from '@daengle/design-system';
import { ButtonTextButtonArrow, DefaultProfile, ToolTip } from '@daengle/design-system/icons';
import { css } from '@emotion/react';

export default function GroomerInfo() {
  return (
    <Layout>
      <AppBar />
      <section css={topSection}>
        <Text typo="title1">상세보기</Text>
        <section css={groomerProfile}>
          <DefaultProfile width={101} height={117} css={imageStyle} />
          <div css={infoBox}>
            <Text typo="title2">문소연 디자이너</Text>
            <div css={tags}>
              <Text typo="body12" color="blue200" css={tag}>
                #대형견
              </Text>
              <Text typo="body12" color="blue200" css={tag}>
                #노견
              </Text>
            </div>
            <TextButton icons={{ suffix: <ButtonTextButtonArrow width={6} /> }}>
              <Text typo="body9" color="gray500">
                꼬꼬마 관리샵
              </Text>
            </TextButton>
          </div>
        </section>
        <section css={infoText}>
          <Text typo="body1">소개</Text>
          <Text typo="body10">
            모든 견종의 가위컷에 자신이 있으며, 특히, 푸들 테디베어컷, 비숑 귀툭튀컷, 포메 곰돌이컷
            등 디자인컷 완성도에 자신이 있습니다.
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
        <div css={button}>
          <RoundButton fullWidth={true}>바로 예약</RoundButton>
          <RoundButton fullWidth={true}>채팅하기</RoundButton>
        </div>
      </section>
      <section css={bottomSection}>
        <div css={menu}>
          <div css={review}>
            <Text typo="subtitle1">받은 리뷰</Text>
            <Text typo="subtitle1">38</Text>
          </div>
          <ButtonTextButtonArrow width={6} />
        </div>
        <div css={line} />
        <div css={menu}>
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
