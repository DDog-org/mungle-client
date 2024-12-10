import { css } from '@emotion/react';
import { theme } from '@daengle/design-system';

export const wrapper = (hasOptions: boolean) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  margin-top: ${hasOptions ? '150px' : '243px'};

  text-align: center;
`;

export const emptyButton = css`
  margin-top: 20px;
  border-radius: 29.5px;

  text-align: center;
  ${theme.typo.body4};
  cursor: pointer;
`;
