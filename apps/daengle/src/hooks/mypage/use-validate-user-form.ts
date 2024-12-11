import { useMemo } from 'react';

export function useValidateUserForm() {
  return useMemo(
    () => ({
      nickname: {
        required: '닉네임을 입력해 주세요',
        pattern: {
          value: /^[a-zA-Zㄱ-ㅎ가-힣]{2,10}$/,
          message: '한글과 영어만 사용할 수 있어요',
        },
        minLength: { value: 2, message: '최소 2자 이상 입력해 주세요' },
        maxLength: { value: 10, message: '최대 10자까지 입력할 수 있어요' },
      },
    }),
    []
  );
}
