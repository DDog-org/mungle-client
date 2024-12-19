import { Empty } from '@daengle/design-system';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { Card } from 'node_modules/@daengle/services/src/components/estimate-list';
import { ROUTES } from '~/constants/commons';
import { useVetEstimateDesignationListQuery } from '~/queries/estimate';

export function DesignationCardList() {
  const router = useRouter();
  const { type } = router.query;

  const {
    data: estimateResponse,
    isLoading: estimateLoading,
    error: estimateError,
  } = useVetEstimateDesignationListQuery();

  const estimates = estimateResponse?.estimates || [];

  if (estimateLoading) {
    return <div>로딩 중...</div>;
  }

  if (estimateError) {
    return <div>견적 데이터를 불러오는데 실패했습니다.</div>;
  }

  if (estimates.length === 0) {
    return <Empty title="아직 도착한 견적서가 없어요" />;
  }

  return (
    <div css={wrapper}>
      {estimates.map((data) => (
        <Card
          onDetailClick={() =>
            router.push({ pathname: ROUTES.ESTIMATES_DETAIL(data.id), query: { type: type } })
          }
          imageUrl={data.imageUrl}
          nickname={data.nickname}
          proposal={data.proposal}
          significant={data.significant}
          reservedDate={data.reservedDate}
        />
      ))}
    </div>
  );
}

const wrapper = css`
  margin: 18px 18px 0 0;
`;
