import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  height: auto;
  padding: 18px 18px;
`;
export const footerWrapper = css`
  padding: 18px 18px 141px;
`;
export const profileImageWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 32px 0 40px;
`;
export const profileEditButtonBox = css`
  margin-top: 12px;
  font-size: 14px;
  color: ${theme.colors.gray400};
`;
export const inputWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const readOnlyTextBox = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const textareaWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const line = css`
  border: 3.5px solid ${theme.colors.gray100};
  width: 100%;
  background-color: ${theme.colors.gray100};
  margin: 32px 0;
`;

export const detailInput = css`
  background-color: ${theme.colors.gray100};
  height: 136px;
  border-radius: 10px;
  padding: 14px;
  ::placeholder {
    color: ${theme.colors.black};
    font-size: ${theme.typo.body9};
  }
`;
export const licenseWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const licenseBox = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const license = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
  background-color: ${theme.colors.green100};
  border: 1px solid ${theme.colors.green200};
  border-radius: 12px;
  ::placeholder {
    color: ${theme.colors.black};
    font-size: ${theme.typo.body9};
  }
`;
