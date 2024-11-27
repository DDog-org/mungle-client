import { css } from '@emotion/react';
import { theme } from '../../foundation';

export const wrapper = css`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const label = css`
  margin-bottom: 9px;
`;

export const inputWrapper = css`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const input = ({
  errorMessage,
  isFocused,
}: {
  errorMessage?: string;
  isFocused: boolean;
}) => css`
  display: flex;
  text-align: left;
  flex: 1;
  padding: 6px 0 10px 6px;

  ${theme.typo.regular01};

  &::placeholder {
    color: ${theme.colors.gray300};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='button'] {
    cursor: pointer;
  }

  border-bottom: ${errorMessage
    ? `1px solid ${theme.colors.red200}`
    : isFocused
      ? `1px solid ${theme.colors.blue200}`
      : `1px solid ${theme.colors.gray200}`};

  transition: border-bottom 0.2s ease;
`;

export const infoTextWrapper = css`
  position: absolute;
  left: 2px;
  bottom: -20px;
  padding: 0 2px;
`;
