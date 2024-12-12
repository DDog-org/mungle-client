import { css } from '@emotion/react';

import { Card } from '../card';
import { theme } from '@daengle/design-system';

export function GroomerListComponent() {
  const array = [1, 2, 3, 4, 5];

  return (
    <div css={wrapper}>
      {array.map(() => (
        <Card
          shopName="꼬꼬마 관리샵"
          address="서울특별시 강남구 언주로152길 10"
          schedule="매일 10:00 - 20:00"
        />
      ))}
    </div>
  );
}

const wrapper = css`
  padding-bottom: 110px;
`;
