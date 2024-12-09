import { AppBar, CTAButton, Layout, Text } from '@daengle/design-system';
import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';
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

/////////// emotion(css) ///////////

const wrapper = css`
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 100%;
  padding: 18px 18px 104px;
`;

const section = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const box = css`
  display: flex;
  gap: 15px;
`;

const dateSelect = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 100%;
  height: 36px;

  cursor: pointer;
`;

const registerPet = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  width: 100%;
  height: 109px;
  border: 1px solid ${theme.colors.gray200};
  border-radius: 10px;
`;

const circle = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  border: 1px solid ${theme.colors.gray200};
  border-radius: 20px;

  cursor: pointer;

  :hover {
    background-color: ${theme.colors.gray100};

    transition: 0.3s;
  }
`;

const textField = css`
  width: 100%;
  height: 135px;
  padding: 18px;
  border-radius: 10px;

  background-color: ${theme.colors.gray100};
  text-align: justify;

  ::placeholder {
    color: ${theme.colors.gray300};
    size: ${theme.typo.body9};
  }
`;
