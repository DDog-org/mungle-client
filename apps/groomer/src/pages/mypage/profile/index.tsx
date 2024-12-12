import {
  wrapper,
  profileImageWrapper,
  profileEditButtonBox,
  inputWrapper,
  readOnlyTextBox,
  textareaWrapper,
  line,
  detailInput,
  licenseWrapper,
  licenseBox,
  license,
  footerWrapper,
} from './index.styles';
import { AppBar, CTAButton, Layout, Text } from '@daengle/design-system';
import Image from 'next/image';

export default function EditProfile() {
  return (
    <Layout isAppBarExist={true}>
      <AppBar />
      <div css={wrapper}>
        <Text typo="title1">프로필 관리</Text>
        <div css={profileImageWrapper}>
          <Image src="/icons/profile_image.svg" alt="프로필 이미지" width={116} height={116} />
          <button css={profileEditButtonBox}>
            <span>프로필 사진 변경하기</span>
          </button>
        </div>
        <section css={inputWrapper}>
          <div css={readOnlyTextBox}>
            <Text typo="subtitle1" color="black">
              프로필 정보
            </Text>
          </div>
          <div css={readOnlyTextBox}>
            <Text typo="subtitle3">이름</Text>
            <Text typo="body3" color="gray400">
              김윤일
            </Text>
          </div>
          <div css={readOnlyTextBox}>
            <Text typo="subtitle3">휴대폰번호</Text>
            <Text typo="body3" color="gray400">
              010-0000-0000
            </Text>
          </div>
          <div css={readOnlyTextBox}>
            <Text typo="subtitle3">이메일</Text>
            <Text typo="body3" color="gray400">
              kyoul10121@gmail.com
            </Text>
          </div>
          <div css={textareaWrapper}>
            <Text typo="subtitle3">소개</Text>
            <textarea css={detailInput} placeholder="안녕" readOnly />
          </div>
        </section>
      </div>
      <div css={line} />
      <div css={footerWrapper}>
        <div css={licenseWrapper}>
          <Text typo="subtitle3">자격증 관리</Text>
          <div css={licenseBox}>
            <div css={license}>
              <Text typo="body4" color="green200">
                윤일 관리사 자격증
              </Text>
              <Text typo="body5" color="gray400">
                2024.12.12
              </Text>
            </div>
            <div css={license}>
              <Text typo="body4" color="green200">
                윤일 관리사 자격증
              </Text>
              <Text typo="body5" color="gray400">
                2024.12.12
              </Text>
            </div>
          </div>
        </div>
        <CTAButton service="partner">수정하기</CTAButton>
      </div>
    </Layout>
  );
}
