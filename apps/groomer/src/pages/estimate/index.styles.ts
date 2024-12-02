import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  background-color: ${theme.colors.background};
`;

export const headerContainer = css`
  padding: 18px;
  margin-top: 20px;
`;

export const listContainer = css`
  flex: 1;
  overflow-y: auto;
  padding: 18px 18px 12px 0px;
`;
