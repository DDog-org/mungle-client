import {
  wrapper,
  profileImageWrapper,
  profileEditButtonBox,
  inputWrapper,
  editButtonBox,
  nickNameWrapper,
  duplicateButtonBox,
  readOnlyTextBox,
} from './index.styles';
import { Input, Layout, RoundButton, Text } from '@daengle/design-system';
import Image from 'next/image';

export default function EditProfile() {
  return (
    <Layout>
      <div css={wrapper}>
        <Text typo={'semibold01'} children={'사용자 정보 등록'} />
        <div css={profileImageWrapper}>
          <Image src="/icons/profile_image.svg" alt="프로필 이미지" width={116} height={116} />
          <button css={profileEditButtonBox}>
            <span>프로필 사진 변경하기</span>
          </button>
        </div>
        <div>
          <section css={inputWrapper}>
            <div css={nickNameWrapper}>
              <Input label={'닉네임'} errorMessage="이미 존재하는 닉네임입니다." />
              <button css={duplicateButtonBox}>중복검사</button>
            </div>
            <div css={readOnlyTextBox}>
              <Text typo={'medium01'}>이름</Text>
              <Text typo={'medium01'} color="gray400">
                김윤일
              </Text>
            </div>
            <div css={readOnlyTextBox}>
              <Text typo={'medium01'}>휴대폰번호</Text>
              <Text typo={'medium01'} color="gray400">
                010-3386-9888
              </Text>
            </div>
            <div css={readOnlyTextBox}>
              <Text typo={'medium01'}>이메일</Text>
              <Text typo={'medium01'} color="gray400">
                kyoul10121@naver.com
              </Text>
            </div>
          </section>
        </div>
        <footer css={editButtonBox}>
          <RoundButton variant={'primary'} size={'XL'} children={'수정하기'}></RoundButton>
        </footer>
      </div>
    </Layout>
  );
}
