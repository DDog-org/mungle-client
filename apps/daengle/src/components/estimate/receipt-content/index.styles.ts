import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin: -2px 14px;
  padding: 18px;

  background-color: ${theme.colors.white};
`;

export const line = css`
  width: 100%;
  height: 0.5px;
  margin-top: 16px;

  background-color: ${theme.colors.gray200};
`;

export const subtitle = css`
  padding-top: 16px;
`;
