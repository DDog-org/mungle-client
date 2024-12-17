import { useRouter } from 'next/router';
import { Empty } from '@daengle/design-system';
import { Card } from '@daengle/services/components';
import { ROUTES } from '~/constants';
import { useVetEstimateGeneralListQuery } from '~/queries';
import { wrapper } from './index.styles';

export function GeneralCardList() {
  const router = useRouter();
  const { tab } = router.query;

  const { data: estimateResponse } = useVetEstimateGeneralListQuery();
  const estimates = estimateResponse?.estimates;

  return (
    <div css={wrapper}>
      {estimates?.length ? (
        estimates?.map((data) => (
          <Card
            key={data.id}
            onDetailClick={() =>
              router.push({ pathname: ROUTES.ESTIMATE_DETAIL(data.id), query: { tab: tab } })
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
