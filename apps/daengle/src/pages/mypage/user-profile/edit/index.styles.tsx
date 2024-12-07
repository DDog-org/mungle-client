import { colors, theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  padding: 18px;
`;
export const container = css`
  width: 393px;
  height: 852px;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;
export const profileImageWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 32px 0 40px;
`;
export const uploadImageButton = css`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 7px;
  border: 1px solid ${theme.colors.gray200};
  overflow: hidden;
  cursor: pointer;

  input {
    display: none;
  }
`;
export const profileEditButtonBox = css`
  text-align: center;
  margin-top: 12px;
  font-size: 14px;
  color: ${colors.gray400};
`;
export const inputWrapper = css`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const nickNameWrapper = css`
  display: flex;
  align-items: flex-end;
`;
export const duplicateButtonBox = css`
  margin: 0 0 18px 4px;
  width: 59px;
  height: 30px;
  border: 1px solid black;
  border-radius: 15px;
  font-size: 10px;
`;
export const readOnlyTextBox = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
