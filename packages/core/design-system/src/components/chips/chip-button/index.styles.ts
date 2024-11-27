import { css } from '@emotion/react';
import { theme } from '../../../foundation';

export const wrapper = ({ disabled }: { disabled: boolean }) => css`
  ${!disabled &&
  css`
    transition: all 0.25s ease;
  `}

  ${disabled &&
  css`
    color: ${theme.colors.gray400} !important;
    background: ${theme.colors.gray200} !important;
    cursor: default;
  `}

  padding: 9px 12px;
  border-radius: 15px;
  border-radius: 15px;
  color: ${theme.colors.black};
  background: ${theme.colors.white};
  border: 0.7px solid ${disabled ? theme.colors.gray400 : theme.colors.black};
  ${theme.typo.regular05};

  &:hover {
    background: ${theme.colors.gray100};
  }
`;
