import { css } from '@emotion/react';
import { theme } from '@daengle/design-system';

export const filterWrapper = css`
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
  border: 5px solid ${theme.colors.blue200};
`;
export const line = css`
  border: 3.5px solid ${theme.colors.gray100};
  width: 100%;
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
  color: ${theme.colors.gray400};
`;

export const inputWrapper = css`
  padding: 0 18px 104px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const readOnlyLayer = css`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0); // 투명 레이어
  position: absolute;
  z-index: ${theme.zIndex.ctaButton - 1};
  cursor: not-allowed;
  pointer-events: all;
`;
export const formBox = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const weightButtonBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  width: 100%;
`;
export const toggleButtonBox = css`
  display: flex;
  gap: 13px;
`;
export const chipToggleButtonBox = css`
  display: flex;
  gap: 10px;
`;
export const selectChipButtonBox = css`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;
export const detailformBox = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const chipButtonBox = css`
  display: flex;
  gap: 7px;
`;
export const buttonContainer = css`
  margin: 32px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 21px;
`;
export const detailInput = css`
  background-color: ${theme.colors.gray100};
  height: 136px;
  border-radius: 10px;
  padding: 14px;
  ::placeholder {
    color: ${theme.colors.gray200};
  }
`;
export const weightWrapper = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 3px;
`;

export const ctaButtonWrapper = css`
  padding: 0 18px;
`;
