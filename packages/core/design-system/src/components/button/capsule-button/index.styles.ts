import { css } from '@emotion/react';
import { theme } from '../../../foundation';

export const wrapper = ({ disabled }: { disabled: boolean }) => css`
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

  padding: 6px 10px;
  color: ${theme.colors.gray600};
  background: ${theme.colors.gray100};
  border-radius: 20px;
  ${theme.typo.body5};
`;
