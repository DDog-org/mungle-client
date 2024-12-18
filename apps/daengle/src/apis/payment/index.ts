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
  GetPaymentHistoryRequestParams,
  GetPaymentHistoryResponse,
} from '~/models';
import { v4 as uuidv4 } from 'uuid';

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
  const generatedUuid = uuidv4(); // UUID 생성

  const response = await api.post<PostPaymentOrderResponse>('/payment/order', body, {
    headers: {
      'Idempotency-Key': generatedUuid,
    },
  });
  console.log('uuid:', generatedUuid);
  return response;
};

export const postPaymentValidate = async (body: PostPaymentValidateRequestBody) => {
  return await api.post<PostPaymentValidateResponse>('/payment/validate', body);
};

export const getPaymentHistory = async ({ reservationId }: GetPaymentHistoryRequestParams) => {
  return await api.get<GetPaymentHistoryResponse>(`/payment/history/${reservationId}`);
};
