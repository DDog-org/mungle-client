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
<<<<<<< HEAD
  GetPaymentHistoryRequestParams,
  GetPaymentHistoryResponse,
=======
>>>>>>> af1095eb (feature(daengle): PG 결제 api 연동 (#250))
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
<<<<<<< HEAD

export const getPaymentHistory = async ({ reservationId }: GetPaymentHistoryRequestParams) => {
  return await api.get<GetPaymentHistoryResponse>(`/payment/history/${reservationId}`);
};
=======
>>>>>>> af1095eb (feature(daengle): PG 결제 api 연동 (#250))
