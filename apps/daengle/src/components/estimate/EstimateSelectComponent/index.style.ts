import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const selectBox = css`
  display: flex;
  gap: 13px;
`;

export const selectItem = css`
  border: 1px solid ${theme.colors.gray200};
  border-radius: 10px;
  width: 100%;
  height: 195px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 17px;
  gap: 35px;
  cursor: pointer;

  :hover {
    background-color: ${theme.colors.gray100};
    transition: 0.3s;
  }
`;
