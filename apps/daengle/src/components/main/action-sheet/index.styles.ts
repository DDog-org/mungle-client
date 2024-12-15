import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 58px;
  z-index: 20;

  width: 100%;
  height: 165px;
  border-radius: 20px 20px 0 0;

  background-color: ${theme.colors.white};
`;

export const actionSheetTitle = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 52px;
`;

export const selectBox = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 52px;

  :hover {
    background-color: ${theme.colors.blue100};
    color: ${theme.colors.blue200};

    cursor: pointer;
  }
`;
