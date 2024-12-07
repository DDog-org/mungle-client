import { css } from '@emotion/react';
import { theme } from '../../foundation';

export const radioGroup = css`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const radio = css`
  display: flex;
  align-items: center;
  gap: 7px;

  transition: all 0.2s;

  cursor: pointer;

  input[type='radio'] {
    width: 12px;
    height: 12px;
    border-radius: 50%;

    box-shadow: 0 0 0 1px ${theme.colors.gray200};

    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
  }

  input[type='radio']:checked {
    width: 12px;
    height: 12px;
    border: 2px solid ${theme.colors.white};

    background: ${theme.colors.blue200};
  }
`;
