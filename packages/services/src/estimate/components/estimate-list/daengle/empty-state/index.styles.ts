import { css } from '@emotion/react';
import { theme } from '@daengle/design-system';

export const wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  gap: 15px;
`;

export const emptyButton = css`
  margin-top: 20px;
  border-radius: 29.5px;
  cursor: pointer;
  text-align: center;
  ${theme.typo.body4};
`;
