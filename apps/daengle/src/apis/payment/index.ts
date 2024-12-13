import { api } from '../config';
import {
  GetPaymentCareHistoryListRequestParams,
  GetPaymentCareHistoryListResponse,
  GetPaymentGroomingHistoryListRequestParams,
  GetPaymentGroomingHistoryListResponse,
  PostPaymentOrderRequestBody,
  PostPaymentOrderResponse,
  PostPaymentValidateRequestBody,
  PostPaymentValidateResponse,
} from '~/models';

export const getPaymentGroomingHistoryList = async (
  params: GetPaymentGroomingHistoryListRequestParams
) => {
  return await api.get<GetPaymentGroomingHistoryListResponse>(`/payment/grooming/history/list`, {
    params,
  });
};

export const getPaymentCareHistoryList = async (params: GetPaymentCareHistoryListRequestParams) => {
  return await api.get<GetPaymentCareHistoryListResponse>(`/payment/care/history/list`, {
    params,
  });
};

export const postPaymentOrder = async (body: PostPaymentOrderRequestBody) => {
  return await api.post<PostPaymentOrderResponse>('/payment/order', body);
};

export const postPaymentValidate = async (body: PostPaymentValidateRequestBody) => {
  return await api.post<PostPaymentValidateResponse>('/payment/validate', body);
};
