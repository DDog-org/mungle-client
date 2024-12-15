import { useRouter } from 'next/router';
import { AppBar, Layout, RoundButton, Text, TextButton, theme } from '@daengle/design-system';
import { ButtonTextButtonArrow, DefaultProfile, ToolTip } from '@daengle/design-system/icons';
import { css } from '@emotion/react';
import { ROUTES } from '~/constants';
import { GNB } from '~/components/commons';

export default function GroomerInfo() {
  const router = useRouter();

  return (
    <Layout isAppBarExist={false}>
      <section css={topSection}>
        <Text typo="title1">마이</Text>
        <section css={groomerProfile}>
          <DefaultProfile width={101} height={117} css={imageStyle} />
          <div css={infoBox}>
            <Text typo="title2">문소연 디자이너</Text>
            <div css={tags}>
              <Text typo="body12" color="green200" css={tag}>
                #대형견
              </Text>
              <Text typo="body12" color="green200" css={tag}>
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
      </section>
      <section css={bottomSection}>
        <div css={line} />
        <div css={menu}>
          <Text typo="body4">프로필 관리</Text>
          <ButtonTextButtonArrow width={6} />
        </div>
        <div css={menu}>
          <Text typo="body4">리뷰 관리</Text>
          <ButtonTextButtonArrow width={6} />
        </div>
        <div css={menu}>
          <Text typo="body4">마이샵 관리</Text>
          <ButtonTextButtonArrow width={6} />
        </div>
        <div css={menu}>
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
  width: 100%;
  height: 14px;
  border-radius: 10px;

  background-color: ${theme.colors.gray100};
`;

const daengleMeter = css`
  display: flex;
  flex-direction: column;
  gap: 15px;

  margin: 24px 0 32px;
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
