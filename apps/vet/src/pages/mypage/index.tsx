import {
  AppBar,
  ChipToggleButton,
  CTAButton,
  ImageInput,
  Input,
  Layout,
  Text,
  theme,
} from '@daengle/design-system';
import { css } from '@emotion/react';
import router from 'next/router';
import DatePickerComponent from '~/components/mypage/date-picker';
import { VET_DAT_OFF } from '~/constants/mypage';

export default function vetProfile() {
  return (
    <Layout isAppBarExist={true}>
      <AppBar onBackClick={router.back} backgroundColor={theme.colors.white} />
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
            <DatePickerComponent />
          </li>
          <li css={readOnlyTextBox}>
            <Text tag="h2" typo="subtitle3">
              휴무일
            </Text>

            <div css={chipButton}>
              {VET_DAT_OFF.map((item) => {
                return (
                  <ChipToggleButton key={item.value} size="circle" isPartnerSelected={true}>
                    {item.label}
                  </ChipToggleButton>
                );
              })}
            </div>
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
  display: flex;
  flex-direction: column;

  padding: 18px;
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
  height: 136px;
  padding: 14px;
  border-radius: 10px;

  background-color: ${theme.colors.gray100};

  ::placeholder {
    color: ${theme.colors.gray200};
    font-size: ${theme.typo.body9};
  }
`;

const chipButton = css`
  display: flex;
  gap: 7px;
`;
