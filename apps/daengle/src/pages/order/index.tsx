import { AppBar, CapsuleButton, CTAButton, Input, Layout, Text } from '@daengle/design-system';
import {
  wrapper,
  section,
  title,
  subtitle,
  line,
  reservationInfo,
  schedule,
  dateTime,
  reservationPrice,
  price,
  thinLine,
  totalPrice,
  additionalInfoBox,
  additionalInfo,
  additionalInfoButton,
  arrow,
  grayLine,
  visitorInfo,
  inputTitle,
  input,
} from './index.styles';
import { SelectUnfoldInactive } from '@daengle/design-system/icons';

export default function Order() {
  return (
    <Layout>
      <AppBar />
      <div css={wrapper}>
        <section css={section}>
          <Text tag="h1" typo="title1" css={title}>
            예약금 결제하기
          </Text>
          <Text tag="h2" typo="subtitle1">
            예약 시 예약금이 결제됩니다.
          </Text>
          <Text tag="h2" typo="subtitle1" color="blue200" css={subtitle}>
            예약금 20,000원
          </Text>
          <Text typo="body11" color="gray600">
            안전한 예약 관리를 위해 예약금 제도를 운영하고 있습니다. <br /> 예약금은 방문 시술 후
            결제금액에서 차감해드립니다.
          </Text>
        </section>
        <div css={line} />
        <section css={section}>
          <Text typo="body4" color="black">
            아래 내용이 맞는지 확인해 주세요
          </Text>
          <section css={reservationInfo}>
            <Text typo="subtitle1" color="black">
              문소연 디자이너
            </Text>
            <Text typo="body9" color="gray400">
              꼬꼬마 관리샵
            </Text>
            <div css={schedule}>
              <Text typo="body4" color="gray400">
                일정
              </Text>
              <div css={dateTime}>
                <Text typo="body4" color="black">
                  2024. 11. 17(일)
                </Text>
                <Text typo="body4" color="black">
                  14:00
                </Text>
              </div>
            </div>
          </section>
          <section css={reservationPrice}>
            <div css={price}>
              <Text typo="body9" color="black">
                예약금
              </Text>
              <Text typo="body9" color="black">
                20,000원
              </Text>
            </div>
            <div css={thinLine} />
            <div css={totalPrice}>
              <Text typo="subtitle1" color="black">
                지금 결제할 금액
              </Text>
              <Text typo="subtitle1" color="red200">
                20,000원
              </Text>
            </div>
          </section>
        </section>
        <div css={line} />
        <section css={section}>
          <section>
            <Text tag="h2" typo="title2" color="black" css={title}>
              예약자 정보
            </Text>

            <div css={visitorInfo}>
              <Text typo="subtitle3" color="black">
                고윤정
              </Text>
              <Text typo="subtitle3" color="black">
                010-0000-0000
              </Text>
            </div>
          </section>
          <section css={additionalInfoBox}>
            <div css={additionalInfo}>
              <div css={additionalInfoButton}>
                <Text typo="body5" color="gray600">
                  실제 방문자가 다르신가요?
                </Text>
                <SelectUnfoldInactive width={12} css={arrow} />
              </div>
              <div css={grayLine} />
            </div>
            <Text tag="h3" typo="body4" color="black" css={inputTitle}>
              실제 방문하실 분의 정보를 입력해주세요
            </Text>
            <Input label="방문자" placeholder="방문자 이름을 입력해주세요" css={input} />
            <Input label="휴대폰번호" placeholder="휴대폰 번호를 입력해주세요" />
          </section>
          <CTAButton>예약하기</CTAButton>
        </section>
      </div>
    </Layout>
  );
}
