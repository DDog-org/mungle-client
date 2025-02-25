import { css } from '@emotion/react';
import { theme } from '../../foundation';
import { Service } from '../../types';

export const wrapper = css`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
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
  service,
  errorMessage,
}: {
  service?: Service;
  errorMessage?: string;
}) => css`
  display: flex;
  flex: 1;

  padding: 6px 0 10px 6px;
  border-radius: 0;

  text-align: left;

  border-bottom: ${errorMessage
    ? `1px solid ${theme.colors.red200}`
    : `1px solid ${theme.colors.gray200}`};

  &:focus {
    border-bottom: 1px solid ${service === 'daengle' ? theme.colors.blue200 : theme.colors.green200};
  }

  ${theme.typo.body8};

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

  &:disabled {
    color: ${theme.colors.gray300};
  }
  transition: border-bottom 0.2s ease;
`;

export const infoTextWrapper = css`
  position: absolute;
  bottom: -20px;
  left: 2px;

  padding: 0 2px;
`;
