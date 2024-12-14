import { css } from '@emotion/react';
import { theme } from '../../foundation';
import { Variant } from './index.types';

export const wrapper = ({ variant }: { variant: Variant }) => css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  height: fit-content;
  padding: 4px 10px;
  border-radius: 30px;

  ${variant === 'solid' && solid};
  ${variant === 'line' && line};
  ${variant === 'ghost' && ghost};
`;

export const solid = css`
  background: ${theme.colors.blue100};
`;

export const line = css`
  border: 1px solid ${theme.colors.blue200};
`;

export const ghost = css`
  background: ${theme.colors.gray200};
`;
