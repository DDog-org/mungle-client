import { css } from '@emotion/react';
import { theme } from '../../../foundation';
import { Variant } from './index.types';

interface WrapperProps {
  variant: Variant;
  disabled: boolean;
}

export const wrapper = ({ variant, disabled }: WrapperProps) => css`
  ${capsule};
  ${buttonVariant({ variant, disabled })};
`;

export const capsule = css`
  transition: background 0.5s ease;
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
    transition: all 0.25s ease;
  `}

  ${disabled &&
  css`
    color: ${theme.colors.gray500} !important;
    background: ${theme.colors.gray300} !important;
    cursor: default;
  `}

  ${variant === 'solid' &&
  css`
    padding: 6px 10px;
    color: ${theme.colors.gray600};
    background: ${theme.colors.gray100};
    border-radius: 20px;
    ${theme.typo.medium04};

    &:hover {
      background: ${theme.colors.gray200};
    }
  `}

  ${variant === 'line' &&
  css`
    padding: 9px 12px;
    border-radius: 15px;
    border-radius: 15px;
    color: ${theme.colors.black};
    border: 0.7px solid ${disabled ? theme.colors.gray500 : theme.colors.black};
    ${theme.typo.regular05};

    &:hover {
      background: ${theme.colors.gray100};
    }
  `}
`;
