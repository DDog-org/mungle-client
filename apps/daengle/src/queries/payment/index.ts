import { useMutation } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';
import { PostPaymentOrderRequestBody, PostPaymentValidateRequestBody } from '~/models/payment';
import { postPaymentOrder, postPaymentValidate } from '~/apis/payment';

export const usePostPaymentOrderMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_PAYMENT_ORDER,
    mutationFn: async (body: PostPaymentOrderRequestBody) => {
      try {
        return await postPaymentOrder(body);
      } catch (error) {
        throw new Error(String(error));
      }
    },
  });
};

export const usePostPaymentValidateMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_PAYMENT_VALIDATE,
    mutationFn: async (body: PostPaymentValidateRequestBody) => {
      try {
        return await postPaymentValidate(body);
      } catch (error) {
        throw new Error(String(error));
      }
    },
  });
};
