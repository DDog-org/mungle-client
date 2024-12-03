import { useMemo } from 'react';

export function useValidateOnboardingForm() {
  return useMemo(
    () => ({
      name: {
        required: '이름을 입력해 주세요',
        validate: (value: string) => {
          if (/\s/.test(value)) return '공백은 작성할 수 없어요';
          if (!/^[a-zA-Zㄱ-ㅎ가-힣]{2,10}$/.test(value)) return '한글과 영어만 사용할 수 있어요';
          return true;
        },
        minLength: { value: 2, message: '최소 2자 이상 입력해 주세요' },
        maxLength: { value: 10, message: '최대 10자까지 입력할 수 있어요' },
      },

      phoneNumber: {
        required: '휴대폰 번호를 입력해 주세요',
        pattern: {
          value: /^010-\d{4}-\d{4}$/,
          message: '휴대폰 번호 형식이 올바르지 않아요',
        },
        maxLength: { value: 13, message: '휴대폰 번호 형식이 올바르지 않아요' },
        validate: (value: string) => {
          if (!value) return '휴대폰 번호를 입력해 주세요';
          if (!/^010-\d{4}-\d{4}$/.test(value)) return '휴대폰 번호 형식이 올바르지 않아요';
          return true;
        },
      },

      shopName: {
        required: '매장명을 입력해 주세요',
        pattern: {
          value: /^[a-zA-Zㄱ-ㅎ가-힣 ]{1,20}$/,
          message: '한글, 영어, 숫자만 사용할 수 있어요',
        },
        minLength: { value: 1, message: '최소 1자 이상 입력해 주세요' },
        maxLength: { value: 20, message: '최대 20자까지 입력할 수 있어요' },
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

      businessLicenses: {
        required: '사업자 등록증 또는 근로소득증명서를 첨부해 주세요',
        validate: {
          minLength: (files: File[]) => files?.length >= 1 || '최소 1장의 증명서를 첨부해 주세요',
          maxLength: (files: File[]) =>
            files?.length <= 2 || '증명서는 최대 2장까지 첨부할 수 있어요',
        },
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
