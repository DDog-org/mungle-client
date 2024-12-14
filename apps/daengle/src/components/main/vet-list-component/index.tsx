import { css } from '@emotion/react';

import { Card } from '../card';
import { useGetUserVetsQuery } from '~/queries/main';

export function VetListComponent() {
  const { data: vets } = useGetUserVetsQuery();

  console.log(vets?.allVets);

  return (
    <div css={wrapper}>
      {vets?.allVets.map((vet) => (
        <Card
          image={vet.vetImage}
          name={vet.vetName}
          address={vet.vetAddress}
          schedule={`매일 ${vet.startTime.substring(0, 5)} - ${vet.endTime.substring(0, 5)}`}
        />
      ))}
    </div>
  );
}

const wrapper = css`
  padding-bottom: 110px;
`;
