import { api } from '../config';
import {
  PostPaymentOrderRequestBody,
  PostPaymentOrderResponse,
  PostPaymentValidateRequestBody,
  PostPaymentValidateResponse,
} from '~/models/payment';

export const postPaymentOrder = async (body: PostPaymentOrderRequestBody) => {
  return await api.post<PostPaymentOrderResponse>('/payment/order', body);
};

export const postPaymentValidate = async (body: PostPaymentValidateRequestBody) => {
  return await api.post<PostPaymentValidateResponse>('/payment/validate', body);
};
