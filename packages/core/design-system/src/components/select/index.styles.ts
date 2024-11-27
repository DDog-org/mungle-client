import { css } from '@emotion/react';
import { theme } from '../../foundation';

export const wrapper = ({ selectedValue }: { selectedValue?: boolean }) => css`
  position: relative;
  display: flex;
  width: 100%;
  border-radius: 30px;
  overflow: hidden;
  border: 1px solid ${selectedValue ? theme.colors.blue200 : theme.colors.gray200};
  color: ${selectedValue ? theme.colors.black : theme.colors.gray200};
`;

export const contents = css`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

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
  ${theme.typo.medium03};
`;
