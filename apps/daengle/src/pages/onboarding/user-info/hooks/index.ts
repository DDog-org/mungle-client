import { useMemo } from 'react';

export function useValidateUserForm() {
  return useMemo(
    () => ({
      username: {
        required: '이름을 입력해 주세요',
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

      nickname: {
        required: '닉네임을 입력해 주세요',
        pattern: {
          value: /^[a-zA-Z0-9ㄱ-ㅎ가-힣]{2,9}$/,
          message: '한글과 영어만 사용할 수 있어요',
        },
        minLength: { value: 2, message: '최소 2자 이상 입력해 주세요' },
        maxLength: { value: 10, message: '최대 10자까지 입력할 수 있어요' },
      },
    }),
    []
  );
}
