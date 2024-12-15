import { Card } from '../card';
import { useGetUserVetsQuery } from '~/queries/main';
import { useAddressFormStore } from '~/stores/main';
import { Empty } from '@daengle/design-system';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants/commons';
import { emptyState, wrapper } from './index.styles';

export function VetListComponent() {
  const router = useRouter();
  const { data: vets } = useGetUserVetsQuery();
  const { addressForm } = useAddressFormStore();
  const filteredVets = vets?.allVets.filter((vet) => vet.vetAddress.includes(addressForm));

  const handleCardClick = (id: number) => {
    router.push(ROUTES.VET_DETAIL(id));
  };

  return (
    <div css={wrapper}>
      {filteredVets && filteredVets.length > 0 ? (
        filteredVets?.map((vet) => (
          <Card
            key={vet.vetAccountId}
            image={vet.vetImage}
            name={vet.vetName}
            address={vet.vetAddress}
            schedule={`매일 ${vet.startTime.substring(0, 5)} - ${vet.endTime.substring(0, 5)}`}
            onClick={() => handleCardClick(vet.vetAccountId)}
          />
        ))
      ) : (
        <Empty title="해당 주소 주변에 병원이 없어요" css={emptyState} />
      )}
    </div>
  );
}
