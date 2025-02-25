import { css } from '@emotion/react';
import { theme } from '@daengle/design-system';

export const wrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 12px 8px 12px 18px;

  cursor: pointer;

  & + & {
    border-top: 1px solid ${theme.colors.gray200};
  }
`;

export const chatItem = css`
  display: flex;
  align-items: center;
  gap: 13px;

  img,
  svg {
    border-radius: 50%;

    background: ${theme.colors.gray200};

    cursor: pointer;
  }
`;

export const chatMenu = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 19px;
  position: relative;
`;

export const chatItemText = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const fabWrapper = css`
  display: flex;
  justify-content: flex-end;
  position: relative;

  width: 120px;
`;

export const fab = css`
  position: absolute;
  top: 10px;
  right: 0;
  z-index: ${theme.zIndex.fab};

  padding: 8px 20px;
  border-radius: 8px;

  background: ${theme.colors.white};
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);

  cursor: pointer;
`;

export const timeWrapper = css`
  padding: 0 10px 10px 0;
`;
