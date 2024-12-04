import { css } from '@emotion/react';
import { theme } from '@daengle/design-system';

export const wrapper = (hasOptions: boolean) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 15px;
  margin-top: ${hasOptions ? '150px' : '100px'};
`;

export const emptyButton = css`
  margin-top: 20px;
  border-radius: 29.5px;
  cursor: pointer;
  text-align: center;
  ${theme.typo.body4};
`;
