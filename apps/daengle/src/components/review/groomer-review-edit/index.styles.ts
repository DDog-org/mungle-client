import { css } from '@emotion/react';
import { theme } from '@daengle/design-system';

export const wrapper = css`
  display: flex;
  flex-direction: column;

  background-color: ${theme.colors.background};
`;

export const header = css`
  margin-bottom: 6px;
  padding: 18px;
`;

export const container = css`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 0 18px;
`;

export const submitButton = css`
  margin-top: 14px;
  padding: 18px;
`;
