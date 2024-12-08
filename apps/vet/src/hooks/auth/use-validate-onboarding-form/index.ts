import { useMemo } from 'react';

export function useValidateOnboardingForm() {
  return useMemo(
    () => ({
      name: {
        required: '병원 이름을 입력해 주세요',
        pattern: {
          value: /^[a-zA-Zㄱ-ㅎ가-힣 ]{2,20}$/,
          message: '한글, 영어, 숫자만 사용할 수 있어요',
        },
        minLength: { value: 2, message: '최소 2자 이상 입력해 주세요' },
        maxLength: { value: 20, message: '최대 20자까지 입력할 수 있어요' },
      },

      phoneNumber: {
        maxLength: { value: 13, message: '전화번호 형식이 올바르지 않아요' },
        validate: (value: string) => {
          if (!value) return '전화번호를 입력해 주세요';
          if (/^02/.test(value) && !/^02-\d{3}-\d{4}$/.test(value))
            return '전화번호 형식이 올바르지 않아요';
          if (
            !/^(051|053|032|062|042|052|044|031|033|043|041|063|061|054|055|064|070|010|02)-?\d{3,4}-?\d{4}$/.test(
              value
            )
          )
            return '전화번호 형식이 올바르지 않아요';
          return true;
        },
      },

      address: {
        required: '매장 주소를 입력해 주세요',
        minLength: { value: 2, message: '최소 2자 이상 입력해 주세요' },
        maxLength: { value: 30, message: '최대 30자까지 입력할 수 있어요' },
      },

      detailAddress: {
        required: '매장 상세 주소를 입력해 주세요',
        minLength: { value: 2, message: '최소 2자 이상 입력해 주세요' },
        maxLength: { value: 30, message: '최대 30자까지 입력할 수 있어요' },
      },

      licenses: {
        required: '자격증을 첨부해 주세요',
        validate: {
          minLength: (files: File[]) => files?.length >= 1 || '최소 1장의 이미지를 첨부해 주세요',
          maxLength: (files: File[]) =>
            files?.length <= 2 || '증명서는 최대 2장까지 첨부할 수 있어요',
        },
      },
    }),
    []
  );
}
