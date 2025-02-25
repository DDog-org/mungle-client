import { useMemo } from 'react';

export function useValidateDesignationCareForm() {
  return useMemo(
    () => ({
      vetId: {
        required: '병원을 선택해 주세요',
      },

      petId: {
        required: '반려동물을 선택해 주세요',
      },

      address: {
        required: '주소를 입력해 주세요',
      },

      reservedDate: {
        required: '예약일을 선택해 주세요',
      },

      symptoms: {
        required: '증상을 입력해 주세요',
        minLength: {
          value: 1,
          message: '최소 1자 이상 입력해 주세요',
        },
        maxLength: {
          value: 100,
          message: '최대 100자까지 입력할 수 있어요',
        },
      },

      requirements: {
        required: '요청사항을 입력해 주세요',
        minLength: {
          value: 1,
          message: '최소 1자 이상 입력해 주세요',
        },
        maxLength: {
          value: 400,
          message: '최대 400자까지 입력할 수 있어요',
        },
      },
    }),
    []
  );
}
