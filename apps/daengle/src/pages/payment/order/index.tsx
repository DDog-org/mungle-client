import { AppBar, CTAButton, Input, Layout, Text } from '@daengle/design-system';
import { SelectUnfoldActive, SelectUnfoldInactive } from '@daengle/design-system/icons';
import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';
import { useState } from 'react';
import { usePostPaymentOrderMutation, usePostPaymentValidateMutation } from '~/queries/payment';
import { PostPaymentOrderResponse } from '~/models/payment';
import Script from 'next/script';
import { ROUTES } from '~/constants/commons';
import { useRouter } from 'next/router';

export default function Order() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [orderUid, setOrderUid] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { mutateAsync: postPaymentOrder } = usePostPaymentOrderMutation();
  const { mutateAsync: postPaymentValidate } = usePostPaymentValidateMutation();

  const IMP_UID = process.env.NEXT_PUBLIC_IMP_UID ?? '';

  const estimateId = 11;
  const serviceType = 'GROOMING';
  const recipientId = 9;
  const recipientName = '김미용사';
  const shopName = '펫케어샵';
  const schedule = '2024-12-06T14:00:00';
  const price = 1000; // 고정 예약금
  const customerName = '홍길동';
  const customerPhoneNumber = '010-1234-5678';
  const visitorName = '김철수';
  const visitorPhoneNumber = '010-9876-5432';

  const scheduleDate = schedule.substring(0, 10);
  const scheduleTime = schedule.substring(11, 16);

  const handleArrowToggle = () => {
    setIsOpen(!isOpen);
  };

  // 결제 요청 api 호출
  const handlePostPaymentOrder = async () => {
    setIsLoading(true);

    try {
      const orderResponse: PostPaymentOrderResponse = await postPaymentOrder({
        estimateId,
        serviceType,
        recipientId,
        recipientName,
        shopName,
        schedule,
        price,
        customerName,
        customerPhoneNumber,
        visitorName,
        visitorPhoneNumber,
      });
      console.log('orderResponse:', orderResponse);
      console.log('orderUid:', orderResponse.orderUId);
      console.log(orderUid);

      // PG 결제 창 띄우기
      if (orderResponse && orderResponse.orderUId) {
        setOrderUid(orderResponse.orderUId);

        if (!IMP_UID) {
          console.error('IMP_UID 환경 변수가 설정되지 않았습니다.');
          alert('결제 환경 설정이 올바르지 않습니다. 관리자에게 문의해주세요.');
          return;
        }

        const { IMP } = window;
        if (IMP) IMP.init(IMP_UID);

        const IMPRequestData = {
          pg: 'html5_inicis',
          pay_method: 'card', // 결제 수단
          merchant_uid: orderUid, // 주문 번호
          name: '주문명: 예약금 결제 테스트',
          amount: price, // 결제 금액
          estimate_id: estimateId,
          service_type: serviceType,
          recipientId: recipientId,
          groomer_name: recipientName,
          shop_name: shopName,
          schedule: schedule,
          buyer_name: customerName,
          buyer_tel: customerPhoneNumber,
          visitor_name: visitorName,
          visitor_tel: visitorPhoneNumber,
          m_redirect_url: ROUTES.PAYMENT_COMPLETE,
        };

        IMP?.request_pay(IMPRequestData, async function (response) {
          //결제 후 호출되는 callback함수
          if (response.error_code) {
            console.log('errorCode:', response.error_code);
            console.log('errorCode2:', response.error.code);
            alert(`결제에 실패하였습니다. 에러 내용: ${response.error_msg}`);
            return;
          }

          console.log('paymentUid:', response.imp_uid);
          console.log('estimateId:', String(estimateId));
          console.log('orderUid:', orderUid);

          // 결제 검증 api 호출
          const validateResponse = await postPaymentValidate({
            paymentUid: response.imp_uid,
            estimateId: String(estimateId),
            orderUid: orderUid,
          });

          console.log('validateResponse:', validateResponse);

          if (validateResponse) {
            //결제 성공
            console.log(response);
            router.push(ROUTES.PAYMENT_COMPLETE);
          } else {
            alert('결제 검증에 실패했습니다.');
          }
        });
      }
    } catch (error) {
      console.error('Error:', error);
      alert('결제 요청 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <Script src="https://cdn.iamport.kr/v1/iamport.js" strategy="afterInteractive" />
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
            예약금 {price.toLocaleString()}원
          </Text>
          <Text typo="body11" color="gray600">
            안전한 예약 관리를 위해 예약금 제도를 운영하고 있습니다. <br />
            예약금은 방문 시술 후 결제금액에서 차감해드립니다.
          </Text>
        </section>
        <div css={line} />
        <section css={section}>
          <Text typo="body4" color="black">
            아래 내용이 맞는지 확인해 주세요
          </Text>
          <section css={reservationInfo}>
            <Text typo="subtitle1" color="black">
              {recipientName}
            </Text>
            <Text typo="body9" color="gray400">
              {shopName}
            </Text>
            <div css={scheduleStyle}>
              <Text typo="body4" color="gray400">
                일정
              </Text>
              <div css={dateTime}>
                <Text typo="body4" color="black">
                  {scheduleDate.replace(/-/g, '.')}
                </Text>
                <Text typo="body4" color="black">
                  {scheduleTime}
                </Text>
              </div>
            </div>
          </section>
          <section css={reservationPrice}>
            <div css={priceStyle}>
              <Text typo="body9" color="black">
                예약금
              </Text>
              <Text typo="body9" color="black">
                {price.toLocaleString()}원
              </Text>
            </div>
            <div css={thinLine} />
            <div css={totalPrice}>
              <Text typo="subtitle1" color="black">
                지금 결제할 금액
              </Text>
              <Text typo="subtitle1" color="red200">
                {price.toLocaleString()}원
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
                {customerName}
              </Text>
              <Text typo="subtitle3" color="black">
                {customerPhoneNumber}
              </Text>
            </div>
          </section>
          <section css={additionalInfoBox}>
            <div css={additionalInfo}>
              <div css={additionalInfoButton}>
                <Text typo="body5" color="gray600">
                  실제 방문자가 다르신가요?
                </Text>
                {isOpen ? (
                  <SelectUnfoldActive width={12} css={arrow} onClick={handleArrowToggle} />
                ) : (
                  <SelectUnfoldInactive width={12} css={arrow} onClick={handleArrowToggle} />
                )}
              </div>
              <div css={grayLine} />
            </div>
            <div css={hiddenBlock({ isOpen })}>
              <Text tag="h3" typo="body4" color="black" css={inputTitle}>
                실제 방문하실 분의 정보를 입력해주세요
              </Text>
              <Input label="방문자" placeholder="방문자 이름을 입력해주세요" css={input} />
              <Input label="휴대폰번호" placeholder="휴대폰 번호를 입력해주세요" />
            </div>
          </section>
          <CTAButton onClick={handlePostPaymentOrder} disabled={isLoading}>
            {isLoading ? '처리중' : '결제하기'}
          </CTAButton>
        </section>
      </div>
    </Layout>
  );
}

//////////// emotion(css) ///////////

const wrapper = css`
  padding: 18px 0 104px;
`;

const section = css`
  padding: 0 18px;
`;

const title = css`
  margin-bottom: 24px;
`;

const subtitle = css`
  margin: 6px 0;
`;

const line = css`
  width: 100%;
  height: 8px;
  margin: 24px 0;

  background-color: ${theme.colors.gray100};
`;

const reservationInfo = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;

  margin: 14px 0;
  padding: 18px;
  border: 2px solid ${theme.colors.blue200};
  border-radius: 21px;
`;

const scheduleStyle = css`
  display: flex;
  justify-content: space-between;

  margin-top: 12px;
`;

const dateTime = css`
  display: flex;
  gap: 11px;
`;

const reservationPrice = css`
  padding: 0 18px;
`;

const priceStyle = css`
  display: flex;
  justify-content: space-between;
`;

const thinLine = css`
  width: 100%;
  height: 1px;
  margin: 14px 0;

  background-color: ${theme.colors.black};
`;

const totalPrice = css`
  display: flex;
  justify-content: space-between;
`;

const additionalInfoBox = css`
  margin-top: 32px;
`;

const additionalInfo = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 100%;
  height: 34px;
`;

const additionalInfoButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  width: 210px;
  height: 34px;
  border-radius: 30px;

  background-color: ${theme.colors.gray100};
`;

const arrow = css`
  position: absolute;
  right: 18px;

  stroke: ${theme.colors.gray300};
`;

const grayLine = css`
  width: 100%;
  height: 1px;

  background-color: ${theme.colors.gray100};
`;

const visitorInfo = css`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const hiddenBlock = ({ isOpen }: { isOpen: boolean }) => ({
  maxHeight: isOpen ? '200px' : '0',
  overflow: 'hidden',
  transition: 'max-height 0.3s ease',
  opacity: isOpen ? 1 : 0,
});

const inputTitle = css`
  margin: 20px 0;
`;

const input = css`
  margin-bottom: 18px;
`;
