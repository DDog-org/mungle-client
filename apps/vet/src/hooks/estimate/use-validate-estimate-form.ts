import { useMemo } from 'react';

export function useValidateEstimateForm() {
  return useMemo(
    () => ({
      diagnosis: {
        required: '추정 병명을 입력해 주세요',
        minLength: { value: 1, message: '최소 1자 이상 입력해 주세요' },
        maxLength: { value: 50, message: '최대 50자까지 입력할 수 있습니다' },
      },

      cause: {
        required: '추정 원인을 입력해 주세요',
        minLength: { value: 1, message: '최소 1자 이상 입력해 주세요' },
        maxLength: { value: 400, message: '최대 400자까지 입력할 수 있습니다' },
      },

      treatment: {
        required: '예상 진료 내용을 입력해 주세요',
        minLength: { value: 1, message: '최소 1자 이상 입력해 주세요' },
        maxLength: { value: 400, message: '최대 400자까지 입력할 수 있습니다' },
      },
    }),
    []
  );
}
