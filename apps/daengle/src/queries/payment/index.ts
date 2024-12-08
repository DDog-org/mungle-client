import { useMutation } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';
import { PostPaymentOrderBody } from '~/models/payment';
import { postPaymentOrder } from '~/apis/payment';

export const usePostPaymentOrderMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_PAYMENT_ORDER,
    mutationFn: async (body: PostPaymentOrderBody) => {
      try {
        return await postPaymentOrder(body);
      } catch (error) {
        throw new Error(String(error));
      }
    },
  });
};
