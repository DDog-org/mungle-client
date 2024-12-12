import { css } from '@emotion/react';

import { Card } from '../card';

export function VetListComponent() {
  const array = [1, 2, 3, 4, 5];
  return (
    <div css={wrapper}>
      {array.map(() => (
        <Card
          shopName="다고쳐 댕댕병원"
          address="서울특별시 강남구 언주로152길 10"
          schedule="매일 10:00 - 18:00"
        />
      ))}
    </div>
  );
}

const wrapper = css`
  padding-bottom: 110px;
`;
