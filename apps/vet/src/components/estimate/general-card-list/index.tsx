import { useRouter } from 'next/router';
import { Card, EmptyState } from 'node_modules/@daengle/services/src/components/estimate-list';
import { css } from '@emotion/react';
import { ROUTES } from '~/constants/commons';
import { useVetEstimateGeneralListQuery } from '~/queries/estimate';

export function GeneralCardList() {
  const router = useRouter();
  const { type } = router.query;

  const {
    data: estimateResponse,
    isLoading: estimateLoading,
    error: estimateError,
  } = useVetEstimateGeneralListQuery();

  const estimates = estimateResponse?.estimates || [];

  if (estimateLoading) {
    return <div>로딩 중...</div>;
  }

  if (estimateError) {
    return <div>견적 데이터를 불러오는데 실패했습니다.</div>;
  }

  if (estimates.length === 0) {
    return <EmptyState isEmptyEstimates={true} hasOptions={false} />;
  }

  return (
    <div css={wrapper}>
      {estimates.map((data) => (
        <Card
          id={data.id}
          onDetailClick={() =>
            router.push({ pathname: ROUTES.ESTIMATE_DETAIL(data.id), query: { type: type } })
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
