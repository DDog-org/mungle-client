import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
<<<<<<< HEAD
<<<<<<< HEAD
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 100%;
  padding: 18px 18px 104px;
=======
  width: 100%;
  padding: 18px 18px 104px 18px;
  display: flex;
  flex-direction: column;
  gap: 32px;
>>>>>>> 8b7c9de (design(daengle): 사용자 병원 견적 요청서 UI 구현 (#177))
=======
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 100%;
  padding: 18px 18px 104px;
>>>>>>> 6afefe8 (fix(daengle): stylint 적용)
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
<<<<<<< HEAD
<<<<<<< HEAD
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 100%;
  height: 36px;

=======
  width: 100%;
  height: 36px;
=======
>>>>>>> 6afefe8 (fix(daengle): stylint 적용)
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
<<<<<<< HEAD
>>>>>>> 8b7c9de (design(daengle): 사용자 병원 견적 요청서 UI 구현 (#177))
=======

  width: 100%;
  height: 36px;

>>>>>>> 6afefe8 (fix(daengle): stylint 적용)
  cursor: pointer;
`;

export const registerPet = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  width: 100%;
  height: 109px;
  border: 1px solid ${theme.colors.gray200};
  border-radius: 10px;
`;

export const circle = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  border: 1px solid ${theme.colors.gray200};
  border-radius: 20px;
<<<<<<< HEAD
=======

>>>>>>> 6afefe8 (fix(daengle): stylint 적용)
  cursor: pointer;

  :hover {
    background-color: ${theme.colors.gray100};

    transition: 0.3s;
  }
`;

export const textField = css`
  width: 100%;
  height: 135px;
  padding: 18px;
  border-radius: 10px;

  background-color: ${theme.colors.gray100};
  text-align: justify;

  ::placeholder {
    color: ${theme.colors.gray300};
    size: ${theme.typo.body9};
  }
`;
