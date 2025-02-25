import { RequestEstimate } from '../request-estimate';
import { useUerEstimateRequestGroomingQuery } from '~/queries';
import { GetUserEstimateRequestGroomingParams } from '~/models';
import { Loading } from '~/components/commons';

export function GroomerRequestEstimate({ id }: { id: number }) {
  const { data, isLoading, error } = useUerEstimateRequestGroomingQuery({
    groomingEstimateId: id,
  } as GetUserEstimateRequestGroomingParams);

  if (isLoading) return <Loading title="견적서를 불러오고 있어요" />;
  if (error || !data) return <div>요청서를 불러오지 못했습니다.</div>;

  return (
    <RequestEstimate
      estimateId={id}
      service="groomer"
      address={data.address}
      reservedDate={data.reservedDate}
      petImageUrl={data.petImageUrl}
      petName={data.petName}
      specificField={{
        title: '원하는 미용',
        value: data.desiredStyle,
      }}
      requirements={data.requirements}
    />
  );
}
