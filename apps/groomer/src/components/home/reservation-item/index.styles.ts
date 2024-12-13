import { css } from '@emotion/react';
import { theme } from '@daengle/design-system';

export const wrapper = css`
  display: flex;
  gap: 22px;

  width: 100%;

  cursor: pointer;
`;

export const info = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;

  width: 100%;
  margin: 7px 0 0;
  padding: 20px 0 0;

  border-top: 0.5px solid ${theme.colors.gray200};
`;

export const profileWrapper = css`
  display: flex;
  gap: 15px;

  img,
  svg {
    border-radius: 50%;

    background: ${theme.colors.gray200};
  }
`;

export const profileTextWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
