import { css } from '@emotion/react';
import { theme } from '@daengle/design-system';

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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  width: fit-content;
`;
export const petProfileImageBox = css`
  overflow: hidden;

  width: 70px;
  height: 70px;
  border: 5px solid ${theme.colors.blue200};
  border-radius: 50%;
  object-fit: cover;
`;
export const line = css`
  width: 100%;
  margin: 32px 0;
  border: 3.5px solid ${theme.colors.gray100};
`;
export const profileImageWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 32px 0 40px;
`;
export const profileImageBox = css`
  overflow: hidden;

  width: 116px;
  height: 116px;
  border-radius: 50%;
  object-fit: cover;
`;
export const profileEditButtonBox = css`
  margin-top: 12px;

  color: ${theme.colors.gray400};
  font-size: 14px;
`;

export const inputWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;

  padding: 0 18px 146px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 21px;

  margin: 32px 0 0;
`;
export const detailInput = css`
  height: 136px;
  padding: 14px;
  border-radius: 10px;

  background-color: ${theme.colors.gray100};

  ::placeholder {
    color: ${theme.colors.gray200};
  }
`;
export const weightWrapper = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  gap: 3px;

  text-align: center;
`;

export const ctaButtonWrapper = css`
  padding: 0 18px;
`;
