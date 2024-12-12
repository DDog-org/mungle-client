import { css } from '@emotion/react';
import { theme } from '@daengle/design-system';

export const petTitle = css`
  padding: 0 18px 0 15px;
`;
export const titleBox = css`
  margin: 18px 18px 40px;
`;
export const petProfileWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const section = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const petList = css`
  display: flex;
  gap: 14px;
  overflow-x: scroll;
`;
export const petProfile = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  cursor: pointer;
`;
export const petItemStyle = (index: number, length: number) => css`
  ${index === 0 && 'padding: 0 0 0 18px;'}
  ${index === length - 1 && 'padding: 0 18px 0 0;'}
`;
export const profileImage = ({ isSelected }: { isSelected: boolean }) => css`
  width: 86px;
  height: 86px;
  border: 4px solid ${isSelected ? theme.colors.blue200 : theme.colors.gray200};
  border-radius: 50px;

  background-color: ${theme.colors.gray200};

  transition: border 0.2s ease;
`;
export const petName = css`
  transition: 0.2s ease;
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

  margin: 0 0 32px;
`;
export const inputWrapper = css`
  padding: 0 18px 146px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;

  padding: 0 18px 146px;
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
