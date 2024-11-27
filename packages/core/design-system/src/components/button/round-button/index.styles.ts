import { css } from '@emotion/react';
import { Size, Variant } from './index.types';
import { theme } from '../../../foundation';

interface WrapperProps {
  size: Size;
  variant: Variant;
  disabled: boolean;
  fullWidth: boolean;
}

export const wrapper = ({ size, variant, disabled, fullWidth }: WrapperProps) => css`
  ${box};
  ${buttonSize({ size, fullWidth })};
  ${buttonVariant({ variant, disabled })};
`;

export const box = css`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.5s ease;
`;

export const buttonSize = ({ size, fullWidth }: { size: Size; fullWidth: boolean }) => css`
  ${size === 'XL' &&
  css`
    width: 100%;
    padding: 27px 0;
    border-radius: 35px;
    ${theme.typo.title2};
  `}
  ${size === 'L' &&
  css`
    width: ${fullWidth ? '100%' : '354px'};
    padding: 18px 0;
    border-radius: 27px;
    ${theme.typo.subtitle2};
  `}
  ${size === 'M' &&
  css`
    width: ${fullWidth ? '100%' : '172px'};
    padding: 16px 0;
    border-radius: 24px;
    ${theme.typo.body1};
  `}
  ${size === 'S' &&
  css`
    width: ${fullWidth ? '100%' : '143px'};
    padding: 13px 0;
    border-radius: 30px;
    ${theme.typo.body1};
  `}
  ${size === 'XS' &&
  css`
    width: ${fullWidth ? '100%' : '60px'};
    padding: 10px 0;
    border-radius: 30px;
    ${theme.typo.body4};
  `}
`;

export const buttonVariant = ({
  variant,
  disabled,
}: {
  variant: Variant;
  disabled: boolean;
}) => css`
  ${!disabled &&
  css`
    &:hover {
      opacity: 0.8;
    }
    transition: opacity 0.25s ease;
  `}

  ${disabled &&
  css`
    color: ${theme.colors.white} !important;
    background: ${theme.colors.gray300} !important;
    cursor: default;
  `}

  ${variant === 'primary' &&
  css`
    color: ${theme.colors.white};
    background: ${theme.colors.blueGradient100};
  `}
  ${variant === 'kakao' &&
  css`
    color: ${theme.colors.black};
    background: #fee500;
  `}
`;
