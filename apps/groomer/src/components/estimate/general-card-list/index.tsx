import { Empty } from '@daengle/design-system';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants/commons';
import { useGroomerEstimateGeneralListQuery } from '~/queries/estimate';
import { wrapper } from './index.styles';
import { Card } from '@daengle/services/components';

export function GeneralCardList() {
  const router = useRouter();
  const { tab } = router.query;

  const { data: estimateResponse } = useGroomerEstimateGeneralListQuery();

  const estimates = estimateResponse?.estimates || [];

  return (
    <div css={wrapper}>
      {estimates.length ? (
        estimates.map((data) => (
          <Card
            onDetailClick={() =>
              router.push({ pathname: ROUTES.ESTIMATES_DETAIL(data.id), query: { tab: tab } })
            }
            imageUrl={data.imageUrl}
            nickname={data.nickname}
            proposal={data.proposal}
            significant={data.significant}
            reservedDate={data.reservedDate}
          />
        ))
      ) : (
        <Empty title={`도착한 견적서가 없어요!\n잠시만 기다려 주세요`} />
      )}
    </div>
  );
}
