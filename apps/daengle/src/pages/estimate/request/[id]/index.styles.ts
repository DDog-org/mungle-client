import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  padding-bottom: 104px;
`;

export const header = css`
  padding: 18px;
  margin-bottom: 22px;
`;

export const footer = css`
  padding: 18px;
  width: 100%;
  position: fixed;
  bottom: 0;
  max-width: ${theme.size.maxWidth};
`;
