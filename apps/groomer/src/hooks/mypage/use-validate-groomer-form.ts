import { useMemo } from 'react';

export function useValidateGroomerForm() {
  return useMemo(
    () => ({
      instagramId: {
        minLength: { value: 2, message: '최소 2자 이상 입력해 주세요' },
        maxLength: { value: 30, message: '최대 30자까지 입력할 수 있습니다' },
      },
      introduction: {
        minLength: {
          value: 1,
          message: '최소 1자 이상 입력해 주세요',
        },
        maxLength: {
          value: 50,
          message: '최대 50자까지 입력할 수 있습니다',
        },
      },
    }),
    []
  );
}
