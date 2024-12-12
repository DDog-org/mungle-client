import { css } from '@emotion/react';
import { colors, theme } from '../../../foundation';
import { Size } from './index.types';

export const wrapper = ({
  isSelected,
  size,
  disabled,
  textColor,
}: {
  isSelected: boolean;
  size: Size;
  disabled: boolean;
  textColor: keyof typeof colors;
}) => css`
  ${size === 'fixed' &&
  css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 67px;
    height: 38px;
    border-radius: 19px;
    ${theme.typo.body11};
  `}

  ${size === 'fluid' &&
  css`
    padding: 8px 18px;
    border-radius: 30px;
    ${theme.typo.body9};
  `}

   ${size === 'full' &&
  css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 10px 0;
    border-radius: 28px;
    ${theme.typo.body10};
  `}

  ${disabled
    ? css`
        background: ${theme.colors.gray200} !important;
        color: ${theme.colors.gray400} !important;

        cursor: default !important;
      `
    : css`
        transition: all 0.25s ease;
      `}

  ${isSelected
    ? css`
        border: 1px solid ${disabled ? theme.colors.gray300 : theme.colors.blue200};

        background: ${theme.colors.blue100};
        color: ${theme.colors.blue200};
      `
    : css`
        border: 1px solid ${disabled ? theme.colors.gray300 : theme.colors.gray200};

        color: ${theme.colors.gray500};
      `}
`;
