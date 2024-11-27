import { CapsuleButton, CTAButton, Input, RoundButton, Text, theme } from '@daengle/design-system';
import { location, locationButton, section, wrapper } from './index.styles';

export default function UserInfo() {
  return (
    <div css={wrapper}>
      <Text typo="semibold01" color="black">
        회원 정보를 입력해 주세요
      </Text>

      <section css={section}>
        <Input label="이름" placeholder="이름(필수)" />

        <Input label="휴대폰 번호" />

        <Input label="닉네임" suffix={<CapsuleButton variant="line">중복검사</CapsuleButton>} />

        <div css={location}>
          <Text typo="medium01" color="black">
            위치 설정
          </Text>
          <RoundButton variant="ghost" fullWidth>
            <div css={locationButton}>
              <Text typo="regular02" color="gray200">
                위치(필수)
              </Text>
            </div>
          </RoundButton>
        </div>
      </section>

      <CTAButton disabled>다음</CTAButton>
    </div>
  );
}
