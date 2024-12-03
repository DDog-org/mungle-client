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
  ${size === 'fixed' &&
  css`
    width: 67px;
    height: 38px;

    display: flex;
    align-items: center;
    justify-content: center;

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
    width: 100%;
    padding: 10px 0;

    display: flex;
    align-items: center;
    justify-content: center;

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
        color: ${theme.colors.gray500};
        border: 1px solid ${disabled ? theme.colors.gray300 : theme.colors.gray200};

        color: ${theme.colors.black};
      `}
`;
