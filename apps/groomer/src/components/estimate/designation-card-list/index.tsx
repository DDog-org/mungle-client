import { useRouter } from 'next/router';
import { Empty } from '@daengle/design-system';
import { Card } from '@daengle/services/components';
import { ROUTES } from '~/constants/commons';
import { useGroomerEstimateDesignationListQuery } from '~/queries';
import { wrapper } from './index.styles';

export function DesignationCardList() {
  const router = useRouter();
  const { tab } = router.query;

  const { data: estimateResponse } = useGroomerEstimateDesignationListQuery();

  const estimates = estimateResponse?.estimates;

  return (
    <div css={wrapper}>
      {estimates?.length ? (
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
