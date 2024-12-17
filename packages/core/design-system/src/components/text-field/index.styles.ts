import { css } from '@emotion/react';
import { theme } from '../../foundation';

export const wrapper = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
`;

export const textareaWrapper = css`
  width: 100%;
  padding: 18px;
  border-radius: 10px;

  background: ${theme.colors.gray100};
`;

export const textarea = css`
  width: 100%;

  background: none;

  ${theme.typo.body9};
  color: ${theme.colors.black};
  line-height: 1.4;

  &::placeholder {
    color: ${theme.colors.gray400};
  }
`;

export const errorMessageWrapper = css`
  position: absolute;
  bottom: -8px;
  left: 2px;

  width: 100%;
  padding: 0 2px;
`;
