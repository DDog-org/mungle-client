import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  padding-bottom: 104px;
`;

export const header = css`
  margin-bottom: 22px;
  padding: 18px;
`;

export const footer = css`
  position: fixed;
  bottom: 0;

  width: 100%;
  max-width: ${theme.size.maxWidth};
  padding: 18px;
`;
