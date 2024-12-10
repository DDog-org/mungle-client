import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const selectBox = css`
  display: flex;
  gap: 13px;
`;

export const selectItem = (isSelected: boolean) => css`
  border: 1px solid ${isSelected ? theme.colors.blue200 : theme.colors.gray200};
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
  background-color: ${isSelected ? theme.colors.blue100 : 'transparent'};
  transition: background-color 0.2s ease;

  :hover {
    background-color: ${isSelected ? theme.colors.blue100 : theme.colors.gray100};
    transition: 0.3s;
  }
`;
