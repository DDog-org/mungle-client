import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  background-color: ${theme.colors.background};
`;

export const header = css`
  display: flex;
  align-items: center;

  margin: 18px;
`;

export const section = css`
  display: flex;
  flex-direction: column;
  gap: 11px;

  margin: 18px 18px 32px;
`;

export const buttonGroup = css`
  display: flex;
  justify-content: center;
  gap: 13px;

  margin: 32px 18px 18px;
`;
