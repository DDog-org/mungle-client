import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: 18px 18px ${theme.size.gnbHeight} 0;
`;
