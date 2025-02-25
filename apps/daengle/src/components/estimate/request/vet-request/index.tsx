import { RequestEstimate } from '../request-estimate';
import { useUerEstimateRequestCareQuery } from '~/queries';
import { GetUserEstimateRequestCareParams } from '~/models';
import { Loading } from '~/components/commons';
import { Empty } from '@daengle/design-system';

export function VetRequestEstimate({ id }: { id: number }) {
  const { data, isLoading, error } = useUerEstimateRequestCareQuery({
    careEstimateId: id,
  } as GetUserEstimateRequestCareParams);

  if (isLoading) return <Loading title="데이터를 불러오고 있어요" />;
  if (error || !data) return <Empty title="데이터를 불러올 때 오류가 발생했어요" />;

  return (
    <RequestEstimate
      estimateId={id}
      service="vet"
      address={data.address}
      reservedDate={data.reservedDate}
      petImageUrl={data.petImageUrl}
      petName={data.petName}
      specificField={{
        title: '증상',
        value: data.symptoms,
      }}
      requirements={data.requirements}
    />
  );
}
