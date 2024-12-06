import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  width: 100%;
  padding: 18px 18px 104px 18px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const section = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const box = css`
  display: flex;
  gap: 15px;
`;

export const dateSelect = css`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const registerPet = css`
  border: 1px solid ${theme.colors.gray200};
  border-radius: 10px;
  width: 100%;
  height: 109px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const circle = css`
  width: 40px;
  height: 40px;
  border: 1px solid ${theme.colors.gray200};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: ${theme.colors.gray100};
    transition: 0.3s;
  }
`;

export const textField = css`
  width: 100%;
  height: 135px;
  background-color: ${theme.colors.gray100};
  border-radius: 10px;
  text-align: justify;
  padding: 18px;

  ::placeholder {
    color: ${theme.colors.gray300};
    size: ${theme.typo.body9};
  }
`;
