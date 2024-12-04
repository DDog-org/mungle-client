import { css } from '@emotion/react';
import { theme } from '@daengle/design-system';

export const wrapper = css`
  display: flex;
  gap: 8px;
  margin: 18px;

  button {
    ${theme.typo.body4};
    color: ${theme.colors.gray500};
  }
`;

export const profileButton = css`
  padding: 4px 14px 4px 4px;
  border-radius: 28px;
  border: 1px solid ${theme.colors.gray200};
  background-color: ${theme.colors.gray200};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${theme.colors.gray500};

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const selectedProfileButton = css`
  && {
    background-color: ${theme.colors.black};
    ${theme.typo.body4};
    color: ${theme.colors.white};
  }
`;

export const hiddenContainer = css`
  display: none;
`;
