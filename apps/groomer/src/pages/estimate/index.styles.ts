import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  height: 100vh;
  padding-bottom: 104px;

  background-color: ${theme.colors.background};
`;

export const headerContainer = css`
  margin-top: 20px;
  padding: 18px;
`;

export const listContainer = css`
  flex: 1;
  overflow-y: auto;

  padding: 18px 18px 104px 0;

  background-color: ${theme.colors.background};
`;
