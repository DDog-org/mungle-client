import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const selectBox = css`
  display: flex;
  gap: 13px;
`;

export const selectItem = (isSelected: boolean) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;

  width: 100%;
  height: 195px;
  padding: 17px;
  border: 1px solid ${isSelected ? theme.colors.blue200 : theme.colors.gray200};
  border-radius: 10px;

  background-color: ${isSelected ? theme.colors.blue100 : 'transparent'};

  transition: background-color 0.2s ease;

  cursor: pointer;

  :hover {
    background-color: ${isSelected ? theme.colors.blue100 : theme.colors.gray100};

    transition: 0.3s;
  }
`;
