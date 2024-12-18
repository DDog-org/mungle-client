import { css } from '@emotion/react';
import { colors, theme } from '../../../foundation';
import { Size } from './index.types';
import { Service } from '../../../types';

export const wrapper = ({
  isSelected,
  size,
  disabled,
  isPartnerSelected,
  service,
}: {
  isSelected: boolean;
  size: Size;
  disabled: boolean;
  isPartnerSelected: boolean | null;
  service: Service;
}) => {
  const borderColor = service === 'partner' ? theme.colors.green200 : theme.colors.blue200;
  const backgroundColor = service === 'partner' ? theme.colors.green200 : theme.colors.blue100;
  const textColor = service === 'partner' ? theme.colors.white : theme.colors.blue200;

  return css`
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

    ${size === 'circle' &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;

      width: 34px;
      height: 34px;
      border-radius: 50%;

      text-align: center;
      ${theme.typo.body6};
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
          border: 1px solid ${disabled ? theme.colors.gray300 : borderColor};

          background: ${backgroundColor};
          color: ${textColor};
        `
      : css`
          border: 1px solid ${disabled ? theme.colors.gray300 : theme.colors.gray200};

          background: ${theme.colors.white};
          color: ${theme.colors.gray500};
        `}
    
    ${isPartnerSelected &&
    css`
      border: none;

      background: ${theme.colors.green200};
      color: ${theme.colors.white};
    `}
  `;
};
