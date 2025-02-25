import { useMemo } from 'react';

export function useValidateGeneralGroomingForm() {
  return useMemo(
    () => ({
      petId: {
        required: '반려동물을 선택해 주세요',
      },

      address: {
        required: '주소를 입력해 주세요',
      },

      reservedDate: {
        required: '예약일을 선택해 주세요',
      },

      desiredStyle: {
        required: '원하는 미용을 선택해 주세요',
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
