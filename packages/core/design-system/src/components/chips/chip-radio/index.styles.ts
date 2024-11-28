import { css } from '@emotion/react';
import { theme } from '../../../foundation';
import { Size } from './index.types';

export const chipRadio = ({ isSelected, size }: { isSelected: boolean; size: Size }) => css`
  display: flex;
  border-radius: 27.5px;
  transition: all 0.2s;
  cursor: pointer;

  ${chipSize({ size })}

  ${isSelected
    ? css`
        color: ${theme.colors.blue200};
        background: ${theme.colors.blue100};
        border: 1px solid ${theme.colors.blue200};
      `
    : css`
        color: ${theme.colors.gray300};
        background: ${theme.colors.white};
        border: 1px solid ${theme.colors.gray200};
      `}

  input {
    display: none;
    padding: 0;
  }
`;

export const chipSize = ({ size }: { size: Size }) => css`
  ${size === 'fluid' &&
  css`
    padding: 8px 18px;
  `};

  ${size === 'fixed' &&
  css`
    width: 67px;
    height: 38px;
    align-items: center;
    justify-content: center;
  `};

  ${size === 'full' &&
  css`
    flex: 1;
    padding: 10px 0;
    align-items: center;
    justify-content: center;
  `};
`;
