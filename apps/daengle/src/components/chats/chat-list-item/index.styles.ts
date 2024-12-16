import { css } from '@emotion/react';
import { theme } from '@daengle/design-system';

export const wrapper = css`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 12px 0;

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
`;

export const chatItemText = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
