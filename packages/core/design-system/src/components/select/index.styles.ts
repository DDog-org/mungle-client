import { css } from '@emotion/react';
import { theme } from '../../foundation';

export const wrapper = ({ selectedValue }: { selectedValue?: boolean }) => css`
  display: flex;
  position: relative;
  overflow: hidden;

  width: 100%;
  border: 1px solid ${theme.colors.gray200};
  border-radius: 30px;

  color: ${selectedValue ? theme.colors.black : theme.colors.gray200};

  transition: all 0.2s ease;

  &:focus-within {
    border: 1px solid ${theme.colors.blue200};
  }
`;

export const contents = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  width: 100%;
  height: 100%;
  padding: 10px 20px;

  span {
    margin: 0 auto;
  }
`;

export const select = css`
  position: absolute;

  width: 100%;
  height: 100%;

  z-index: 2;
  opacity: 0;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  border: none;
  outline: none;

  cursor: pointer;
  ${theme.typo.body10};
`;
