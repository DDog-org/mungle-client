import { useMemo } from 'react';

export function useValidatePetEdit() {
  return useMemo(
    () => ({
      name: {
        required: '이름을 입력해 주세요',
        pattern: {
          value: /^[a-zA-Zㄱ-ㅎ가-힣]{2,10}$/,
          message: '한글과 영어만 사용할 수 있어요',
        },
        minLength: { value: 2, message: '최소 2자 이상 입력해 주세요' },
        maxLength: { value: 10, message: '최대 10자까지 입력할 수 있어요' },
      },

      birth: {
        required: '탄생년도를 선택해 주세요',
      },

      gender: {
        required: '성별을 선택해 주세요',
      },

      isNeutered: {
        required: '중성화 여부를 선택해 주세요',
      },

      breed: {
        required: '품종을 선택해 주세요',
      },

      weight: {
        required: '몸무게를 선택해 주세요',
      },

      groomingExperience: {
        required: '미용 경험 여부를 선택해 주세요',
      },

      isBite: {
        required: '입질 여부를 선택해 주세요',
      },
    }),
    []
  );
}
