import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  height: 100vh;
`;

export const sectionDivider = css`
  display: block;

  width: 100%;
  height: 8px;
  margin: 0;

  background-color: ${theme.colors.gray100};
`;

export const requestTitle = css`
  padding: 24px 18px;
`;

export const button = css`
  padding: 24px 18px;
`;
