import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 8px;
  overflow: scroll hidden;
`;

export const uploadImageButton = css`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 116px;
  height: 116px;
  border: 1px solid ${theme.colors.gray200};
  border-radius: 50%;
  cursor: pointer;
  input {
    display: none;
  }
`;
export const profileImageWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const profileEditButtonBox = css`
  margin-top: 12px;
  color: ${theme.colors.gray400};
  font-size: 14px;
  text-align: center;
`;

export const thumbnailImage = css`
  flex-shrink: 0;
  width: 116px;
  height: 116px;
  border-radius: 50%;
  object-fit: cover;
`;
export const defaultImage = css`
  background-color: ${theme.colors.gray200};
`;
