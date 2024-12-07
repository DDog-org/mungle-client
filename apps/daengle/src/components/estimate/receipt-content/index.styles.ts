import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  flex-direction: column;
  padding: 18px;
  background-color: #ffffff;
  gap: 8px;
  margin: -2px 14px;
`;

export const line = css`
  height: 0.5px;
  background-color: ${theme.colors.gray200};
  width: 100%;
  margin-top: 16px;
`;

export const subtitle = css`
  padding-top: 16px;
`;
