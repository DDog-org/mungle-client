import { css } from '@emotion/react';

import { Card } from '../card';
import { useGetUserShopsQuery } from '~/queries/main';

export function GroomerListComponent() {
  const { data: shops } = useGetUserShopsQuery();

  console.log('shopInfo', shops?.allShops);

  return (
    <div css={wrapper}>
      {shops?.allShops.map((shop) => (
        <Card
          image={shop.shopImage}
          name={shop.shopName}
          address={shop.shopAddress}
          schedule={`매일 ${shop.startTime} - ${shop.endTime}`}
        />
      ))}
    </div>
  );
}

const wrapper = css`
  padding-bottom: 110px;
`;
