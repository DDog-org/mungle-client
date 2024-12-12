import {
  GetPaymentCareHistoryListRequestParams,
  GetPaymentCareHistoryListResponse,
  GetPaymentGroomingHistoryListRequestParams,
  GetPaymentGroomingHistoryListResponse,
  GetPaymentHistoryRequestParams,
  GetPaymentHistoryResponse,
} from '~/models';
import { api } from '../config';

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

export const getPaymentHistory = async ({ reservationId }: GetPaymentHistoryRequestParams) => {
  return await api.get<GetPaymentHistoryResponse>(`/api/payment/${reservationId}`);
};
