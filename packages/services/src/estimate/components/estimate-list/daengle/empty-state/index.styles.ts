import { css } from '@emotion/react';
import { theme } from '@daengle/design-system';

export const emptyStateWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
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
