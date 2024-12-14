import { AppBar, CTAButton, ImageInput, Input, Layout, Text, theme } from '@daengle/design-system';
import { css } from '@emotion/react';
import router from 'next/router';

export default function vetProfile() {
  return (
    <Layout isAppBarExist={true}>
      <AppBar onBackClick={router.back} />
      <div css={wrapper}>
        <Text tag="h1" typo="title1" color="black">
          병원 프로필 관리
        </Text>
        <ul css={inputWrapper}>
          <section css={profileImageWrapper}>
            <Text tag="h2" typo="subtitle3">
              이미지 첨부
            </Text>
            <ImageInput />
          </section>
          <li css={readOnlyTextBox}>
            <Text tag="h2" typo="subtitle3">
              병원명
            </Text>
            <Text typo="body3" color="gray400">
              다고쳐병원
            </Text>
          </li>
          <li css={readOnlyTextBox}>
            <Text tag="h2" typo="subtitle3">
              영업시간
            </Text>
          </li>
          <li css={readOnlyTextBox}>
            <Text tag="h2" typo="subtitle3">
              휴무일
            </Text>
          </li>
          <li css={readOnlyTextBox}>
            <Input label="전화번호" />
          </li>
          <li css={readOnlyTextBox}>
            <Text tag="h2" typo="subtitle3">
              위치
            </Text>
            <Text typo="body3" color="gray400">
              서울특별시 강남구 언주로152길 10
            </Text>
          </li>
          <li css={readOnlyTextBox}>
            <Text tag="h2" typo="subtitle3">
              소개
            </Text>
            <textarea css={detailInput} placeholder="소개글을 작성해주세요" />
          </li>
        </ul>
        <CTAButton service="partner">수정하기</CTAButton>
      </div>
    </Layout>
  );
}
export const wrapper = css`
  padding: 18px;
  display: flex;
  flex-direction: column;
`;
export const profileImageWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  margin: 40px 0 0;
`;
export const inputWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 32px;

  margin: 0 0 104px;
  padding: 0;
`;
export const readOnlyTextBox = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const detailInput = css`
  background-color: ${theme.colors.gray100};
  height: 136px;
  border-radius: 10px;
  padding: 14px;
  ::placeholder {
    color: ${theme.colors.gray200};
    font-size: ${theme.typo.body9};
  }
`;
