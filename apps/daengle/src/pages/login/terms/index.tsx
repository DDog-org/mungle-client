import { AppBar, Layout, Text, theme } from '@daengle/design-system';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants';

export default function Terms() {
  const router = useRouter();

  return (
    <Layout>
      <AppBar
        onBackClick={router.back}
        onHomeClick={() => router.push(ROUTES.HOME)}
        backgroundColor="white"
      />

      <section css={wrapper}>
        <Text tag="h1" typo="title1">
          이용약관
        </Text>
      </section>

      <section css={content}>
        <div css={sectionWrapper}>
          <Text tag="h2" typo="subtitle1" color="blue200">
            서비스 이용 조건
          </Text>
          <Text tag="p" typo="body4">
            본 서비스는 반려견의 미용 및 진료 서비스를 중계하는 플랫폼으로, 사용자는 제공된 미용사와
            수의사와 직접 계약을 체결하지 않으며, 서비스 이용에 따른 책임은 각 파트너와 사용자에게
            있습니다.
          </Text>
        </div>

        <div css={sectionWrapper}>
          <Text tag="h2" typo="subtitle1" color="blue200">
            서비스 제공 범위
          </Text>
          <Text tag="p" typo="body4">
            본 플랫폼은 반려견 미용 및 진료에 필요한 정보 제공과 서비스 예약 기능을 제공하지만,
            직접적인 미용 또는 진료 서비스를 제공하지 않습니다.
          </Text>
        </div>

        <div css={sectionWrapper}>
          <Text tag="h2" typo="subtitle1" color="blue200">
            이용자의 책임
          </Text>
          <Text tag="p" typo="body4">
            사용자는 제공된 서비스에 대한 정확한 정보를 입력하고, 반려견의 건강 상태를 정확하게
            전달해야 하며, 잘못된 정보 제공으로 발생하는 문제에 대한 책임은 이용자에게 있습니다.
          </Text>
        </div>

        <div css={sectionWrapper}>
          <Text tag="h2" typo="subtitle1" color="blue200">
            서비스 이용 제한
          </Text>
          <Text tag="p" typo="body4">
            반려견이 심각한 건강 문제나 전염성 질병을 앓고 있을 경우, 서비스 이용이 제한될 수
            있으며, 이에 대한 책임은 이용자에게 있습니다.
          </Text>
        </div>

        <div css={sectionWrapper}>
          <Text tag="h2" typo="subtitle1" color="blue200">
            결제 및 취소 정책
          </Text>
          <Text tag="p" typo="body4">
            모든 결제는 미용 및 진료 예약 완료 후 이루어지며, 예약 취소 및 환불 정책에 대한 규정이
            따릅니다. (예: 예약 24시간 전 취소 시 전액 환불)
          </Text>
        </div>

        <div css={sectionWrapper}>
          <Text tag="h2" typo="subtitle1" color="blue200">
            개인정보 보호
          </Text>
          <Text tag="p" typo="body4">
            사용자의 개인정보는 법적 요구 사항에 따라 보호되며, 서비스 제공에 필요한 최소한의 정보만
            사용됩니다.
          </Text>
        </div>
      </section>

      <div css={border} />

      <section css={wrapper}>
        <Text tag="h1" typo="title1">
          주의사항
        </Text>

        <div css={sectionWrapper}>
          <Text tag="h2" typo="subtitle1" color="blue200">
            1. 정확한 정보 입력
          </Text>
          <Text tag="p" typo="body4">
            - 반려견의 건강 상태와 미용에 관한 특별한 요구사항(알레르기, 약물 등)을 정확히 입력해야
            하며, 이를 미제공 시 서비스에 제한이 있을 수 있습니다.
          </Text>
        </div>

        <div css={sectionWrapper}>
          <Text tag="p" typo="body1">{`
1. 정확한 정보 입력
    - 반려견의 건강 상태와 미용에 관한 특별한 요구사항(알레르기, 약물 등)을 정확히 입력해야 하며, 이를 미제공 시 서비스에 제한이 있을 수 있습니다.

2. 반려견 상태에 따른 서비스 제한
   - 심각한 건강 상태나 진료가 필요한 반려견은 미용 서비스가 불가능할 수 있으며, 이러한 경우 별도의 진료가 필요합니다.
   - 미용 서비스는 전염성 질병, 급성 질병, 혹은 치료가 필요한 상태에서는 제공되지 않습니다.

3. 검사 및 진단의 필요성
   - 반려견의 건강 상태에 따라 서비스 이용 전 필수 검사가 요구될 수 있으며, 검사 후 제공되는 진단서에 따라 미용 및 진료 방법이 달라질 수 있습니다.

4. 서비스의 정확성
   - 본 플랫폼은 중계 역할을 하며, 반려견 미용 및 진료에 대한 최종 판단과 서비스 제공은 파트너인 미용사 및 수의사에 의해 이루어집니다.

5. 예약 변경 및 취소
  - 예약 취소 또는 변경은 일정 기간 내에만 가능하며, 이를 초과할 경우 서비스 요금의 일부가 부과될 수 있습니다.
          `}</Text>
        </div>
      </section>
    </Layout>
  );
}

const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 36px;

  width: 100%;
  padding: 18px 18px 36px;
`;

const content = css`
  display: flex;
  flex-direction: column;
  gap: 32px;

  margin: 18px 0 0;
  padding: 0 18px;
`;

const sectionWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 4px;

  line-height: 1.4;
`;

const border = css`
  width: 100%;
  height: 8px;
  margin: 24px 0;

  background: ${theme.colors.gray100};
`;
