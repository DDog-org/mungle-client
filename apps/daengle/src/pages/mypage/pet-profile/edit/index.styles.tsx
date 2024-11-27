import { css } from '@emotion/react';
import { colors } from '@daengle/design-system';
export const wrapper = css`
  padding: 0 18px;
`;
export const titleBox = css`
  margin: 0 0 40px;
`;
export const petProfileWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const petProfileEditWrapper = css`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
export const petProfileImageBox = css`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  border: 5px solid ${colors.blue200};
`;
export const line = css`
  background-color: ${colors.gray100};
  width: 100%;
  height: 7px;
  margin: 31px 0 32px;
`;
export const profileImageWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 32px 0 40px;
`;
export const profileImageBox = css`
  width: 116px;
  height: 116px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
`;
export const profileEditButtonBox = css`
  margin-top: 12px;
  font-size: 14px;
  color: ${colors.gray400};
`;
export const inputWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0 0 159px;
`;
export const buttonContainer = css`
  margin: 32px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 21px;
`;
export const detailInputWrapper = css`
  display: flex;
  flex-direction: column;
`;
export const detailInput = css`
  margin: 15px 0 0;
  background-color: ${colors.gray100};
  height: 136px;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  padding: 14px;
  ::placeholder {
    color: ${colors.gray200};
  }
`;
