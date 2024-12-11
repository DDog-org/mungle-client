import { AppBar, Layout, RoundButton, Text } from '@daengle/design-system';
import { PetImage, Section } from '~/components/estimate';
import { useRouter } from 'next/router';
import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';
import { ROUTES } from '~/constants/commons';

import { useUerEstimateRequestGroomingQuery } from '~/queries';
import { GetUserEstimateRequestGroomingParams } from '~/models';

function formatDateTime(dateTimeString: string) {
  const date = new Date(dateTimeString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  const dayName = dayNames[date.getDay()];

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}.${month}.${day}(${dayName}) ${hours}:${minutes}`;
}

export default function RequestEstimate() {
  const router = useRouter();
  const { id } = router.query;
  const estimateId = Number(id);
  const params: GetUserEstimateRequestGroomingParams = { estimateId: estimateId };
  const { data, isLoading, error } = useUerEstimateRequestGroomingQuery(params);

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>데이터를 불러오지 못했습니다.</div>;

  const requestData = data || [];

  const handleRequest = () => {
    alert('견적을 그만 받으시겠습니까?');
  };

  return (
    <Layout>
      <AppBar onBackClick={router.back} onHomeClick={() => router.push(ROUTES.HOME)} />
      <div css={wrapper}>
        <div css={header}>
          <Text typo="title1">내가 보낸 요청</Text>
        </div>
        <Section title="지역">
          <Text typo="title2">{requestData.address}</Text>
        </Section>
        <Section title="시술 희망 날짜 및 시간">
          <Text typo="title2">{formatDateTime(requestData.reservedDate)}</Text>
        </Section>
        <Section title="어떤 아이를 가꿀 예정이신가요?">
          {/* TODO: 사용자 등록폼 아이 프로필 부분 컴포넌트로 통일 시키기 */}
          <PetImage petImage={requestData.petImage} petname={requestData.petName} />
        </Section>
        <Section title="원하는 미용">
          <Text typo="title2">{requestData.desiredStyle}</Text>
        </Section>
        <Section title="추가 요청사항">
          <Text typo="subtitle1">{requestData.requirements}</Text>
        </Section>
        <div css={footer}>
          <RoundButton
            service="daengle"
            size="L"
            variant="primary"
            fullWidth
            onClick={handleRequest}
          >
            <Text typo="subtitle2" color="white">
              견적 그만 받기
            </Text>
          </RoundButton>
        </div>
      </div>
    </Layout>
  );
}

const wrapper = css`
  padding-bottom: 104px;
`;

const header = css`
  margin-bottom: 22px;
  padding: 18px;
`;

const footer = css`
  position: fixed;
  bottom: 0;

  width: 100%;
  max-width: ${theme.size.maxWidth};
  padding: 18px;
`;
