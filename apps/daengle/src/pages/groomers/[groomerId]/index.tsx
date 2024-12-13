// 미용사 상세정보

import { AppBar, Layout, Text, theme } from '@daengle/design-system';
import { DefaultProfile } from '@daengle/design-system/icons';
import { css } from '@emotion/react';

export default function GroomerInfo() {
  return (
    <Layout>
      <AppBar />
      <Text typo="title1">상세보기</Text>
      <section>
        <div css={groomerProfile}>
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
            <div css={myShop}>
              <Text typo="body9" color="gray500">
                꼬꼬마 관리샵
              </Text>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

const groomerProfile = css`
  display: flex;
  align-items: center;
  gap: 15px;

  width: 100%;
  height: 153px;
  border-bottom: 1px solid ${theme.colors.gray200};
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

const myShop = css``;
