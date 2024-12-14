import { useMemo } from 'react';

export function useValidateMyPageForm() {
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

      imageUrls: {
        required: '병원 프로필 사진을 첨부해주세요',
        validate: {
          maxLength: (files: File[]) =>
            files?.length <= 10 || '프로필 사진은 최대 10장까지 첨부할 수 있어요',
        },
      },
    }),
    []
  );
}
