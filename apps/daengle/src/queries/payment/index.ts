import { useMutation } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';
import { PostPaymentOrderRequestBody, PostPaymentValidateRequestBody } from '~/models/payment';
import { postPaymentOrder, postPaymentValidate } from '~/apis/payment';

export const usePostPaymentOrderMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_PAYMENT_ORDER,
    mutationFn: (body: PostPaymentOrderRequestBody) => {
      return postPaymentOrder(body);
    },
  });
};

export const usePostPaymentValidateMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_PAYMENT_VALIDATE,
    mutationFn: (body: PostPaymentValidateRequestBody) => {
      return postPaymentValidate(body);
    },
  });
};
