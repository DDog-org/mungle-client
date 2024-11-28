import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { AppBar, ChipButton, CTAButton, Input, RoundButton, Text } from '@daengle/design-system';
import { ROUTES } from '~/constants/routes';
import { useSearchAddressStore } from '~/store/onboarding/address';
import { location, locationButton, section, wrapper } from './index.styles';

export default function UserInfo() {
  const router = useRouter();
  const { address } = useSearchAddressStore();

  const jibunAddress = useMemo(
    () => `${address?.sido} ${address?.sigungu} ${address?.bname}`,
    [address]
  );

  return (
    <>
      <AppBar />
      <div css={wrapper}>
        <Text typo="title1" color="black">
          회원 정보를 입력해 주세요
        </Text>

        <section css={section}>
          <Input label="이름" placeholder="이름을 입력해 주세요" />

          <Input label="휴대폰 번호" />

          <Input label="닉네임" suffix={<ChipButton>중복검사</ChipButton>} />

          <div css={location}>
            <Text typo="subtitle3" color="black">
              위치 설정
            </Text>
            <RoundButton
              variant="ghost"
              fullWidth
              onClick={() => router.push(ROUTES.ONBOARDING_SEARCH_ADDRESS)}
            >
              <div css={locationButton}>
                {address ? (
                  <Text typo="body10" color="black">
                    {jibunAddress}
                  </Text>
                ) : (
                  <Text typo="body10" color="gray200">
                    위치
                  </Text>
                )}
              </div>
            </RoundButton>
          </div>
        </section>

        <CTAButton disabled>다음</CTAButton>
      </div>
    </>
  );
}
