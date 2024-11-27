import { css } from '@emotion/react';
import { colors } from '@daengle/design-system';
export const titleBox = css`
  margin: 0 0 40px;
`;
export const profileImageWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 32px 0 40px;
`;
export const profileImageBox = css`
  position: relative;
  display: block;
  border-radius: 50%;
  overflow: hidden;
  box-sizing: border-box;
  object-fit: fill; // 이미지를 컨테이너에 맞게 채움
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
