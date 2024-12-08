import { api } from '../config';
import { PostPaymentOrderBody, PostPaymentOrderResponse } from '~/models/payment';

export const postPaymentOrder = async (body: PostPaymentOrderBody) => {
  return await api.post<PostPaymentOrderResponse>('/payment/order', body);
};
