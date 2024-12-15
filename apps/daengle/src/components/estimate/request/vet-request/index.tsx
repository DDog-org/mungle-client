import { RequestEstimate } from '../request-estimate';
import { useUerEstimateRequestCareQuery } from '~/queries';
import { GetUserEstimateRequestCareParams } from '~/models';

export function VetRequestEstimate({ id }: { id: number }) {
  const { data, isLoading, error } = useUerEstimateRequestCareQuery({
    careEstimateId: id,
  } as GetUserEstimateRequestCareParams);

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>데이터를 불러오지 못했습니다.</div>;

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
