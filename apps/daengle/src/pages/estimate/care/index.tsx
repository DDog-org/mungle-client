import { AppBar, CTAButton, Layout, Text } from '@daengle/design-system';
import { wrapper, section, registerPet, circle, textField } from './index.styles';
import Image from 'next/image';
import { useRouter } from 'next/router';
import DatePickerComponent from '~/components/estimate/DatePickerComponent';

export default function EstimateCare() {
  const router = useRouter();

  return (
    <Layout>
      <AppBar />
      <div css={wrapper}>
        <Text tag="h1" typo="title1" color="black">
          견적 요청서
        </Text>
        <section css={section}>
          <Text tag="h2" typo="subtitle3" color="black">
            지역
          </Text>
          <Text typo="title2" color="black">
            서울 강남구 역삼동
          </Text>
        </section>
        <section css={section}>
          <Text tag="h2" typo="subtitle3" color="black">
            시술 희망 날짜 및 시간
          </Text>
          <DatePickerComponent />
        </section>
        <section css={section}>
          <Text tag="h2" typo="subtitle3" color="black">
            어떤 아이가 진료를 받을 예정인가요?
          </Text>
          <div css={registerPet}>
            <div css={circle}>
              <Image
                src="/icons/add_button.svg"
                alt="등록 버튼"
                width={12}
                height={12}
                onClick={() => {
                  router.push({
                    pathname: '/mypage/pet-profile/edit',
                  });
                }}
              />
            </div>
            <Text typo="body11" color="gray400">
              반려견을 등록해주세요
            </Text>
          </div>
        </section>
        <section css={section}>
          <Text tag="h2" typo="subtitle3" color="black">
            증상
          </Text>
          <textarea placeholder="증상을 입력해주세요" css={textField} />
        </section>
        <section css={section}>
          <Text tag="h2" typo="subtitle3" color="black">
            추가 요청사항
          </Text>
          <textarea placeholder="추가 요청사항을 입력해주세요" css={textField} />
        </section>
        <CTAButton>요청하기</CTAButton>
      </div>
    </Layout>
  );
}
