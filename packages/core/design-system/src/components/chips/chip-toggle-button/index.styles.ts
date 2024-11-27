import { css } from '@emotion/react';
import { theme } from '../../../foundation';
import { Size } from './index.types';

export const wrapper = ({
  isSelected,
  size,
  disabled,
}: {
  isSelected: boolean;
  size: Size;
  disabled: boolean;
}) => css`
  ${theme.typo.regular04};

  ${size === 'fixed' &&
  css`
    width: 67px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 19px;
  `}

  ${size === 'fluid' &&
  css`
    padding: 8px 18px;
    border-radius: 30px;
  `}

   ${size === 'full' &&
  css`
    width: 100%;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 28px;
  `}

  ${disabled
    ? css`
        color: ${theme.colors.gray400} !important;
        background: ${theme.colors.gray200} !important;
        cursor: default !important;
      `
    : css`
        transition: all 0.25s ease;
      `}

  ${isSelected
    ? css`
        color: ${theme.colors.blue200};
        background: ${theme.colors.blue100};
        border: 1px solid ${disabled ? theme.colors.gray300 : theme.colors.blue200};
      `
    : css`
        color: ${theme.colors.black};
        border: 1px solid ${disabled ? theme.colors.gray300 : theme.colors.gray200};
      `}
`;
