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
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 4px 14px 4px 4px;
  border: 1px solid ${theme.colors.gray200};
  border-radius: 28px;

  background-color: ${theme.colors.gray200};
  color: ${theme.colors.gray500};

  cursor: pointer;

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

export const defaultImage = css`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;
