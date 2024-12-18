import { useMemo } from 'react';

export function useValidateEstimateForm() {
  return useMemo(
    () => ({
      overallOpinion: {
        required: '추가 소견을 입력해 주세요',
        minLength: { value: 1, message: '최소 1자 이상 입력해 주세요' },
        maxLength: { value: 400, message: '최대 400자까지 입력할 수 있습니다' },
      },
    }),
    []
  );
}
