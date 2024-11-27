import { Input, Layout, RoundButton, Text } from '@daengle/design-system';
import {
  wrapper,
  titleBox,
  profileImageWrapper,
  profileImageBox,
  profileEditButtonBox,
  inputWrapper,
  buttonContainer,
  detailInputWrapper,
  detailInput,
} from './index.styles';
import Image from 'next/image';
export default function DogEditProfile() {
  return (
    <Layout>
      <div css={wrapper}>
        <div css={titleBox}>
          <Text typo={'semibold01'}>반려견 프로필 수정</Text>
        </div>
        <Text typo={'medium01'}>내 아이</Text>

        <div css={profileImageWrapper}>
          <div css={profileImageBox}>
            <Image
              src="/icons/dog-edit-profile_image.jpeg"
              alt="프로필 이미지"
              width={116}
              height={116}
              objectFit="fill"
            />
          </div>
          <button css={profileEditButtonBox}>
            <span>프로필 사진 변경하기</span>
          </button>
        </div>
        <section css={inputWrapper}>
          <Input label={'이름'} />
        </section>
        <section css={detailInputWrapper}>
          <Text typo="medium01">특이사항</Text>
          <input css={detailInput} placeholder="특이사항이 있다면 입력해주세요" />
        </section>
        <footer css={buttonContainer}>
          <RoundButton variant="primary" size="XL">
            수정하기
          </RoundButton>
          <button>
            <Text typo="semibold04" color="gray200">
              삭제하기
            </Text>
          </button>
        </footer>
      </div>
    </Layout>
  );
}
