import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  background-color: ${theme.colors.background};
  padding-bottom: 104px;
`;

export const header = css`
  display: flex;
  align-items: center;
  margin: 18px;
`;

export const section = css`
  display: flex;
  flex-direction: column;
  margin: 18px;
  gap: 11px;
`;

export const buttonGroup = css`
  display: flex;
  gap: 13px;
  margin: 32px 18px 18px;
  justify-content: center;
`;
