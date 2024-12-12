import { GROOMER_PAYMENT_STATUS, VET_PAYMENT_STATUS } from '~/constants/payment';

export interface GetPaymentGroomingHistoryListRequestParams {
  page?: number;
  size?: number;
}

export interface GetPaymentGroomingHistoryListResponse {
  paymentHistoryList: PaymentHistory[];
}

export interface GetPaymentCareHistoryListRequestParams {
  page?: number;
  size?: number;
}

export interface GetPaymentCareHistoryListResponse {
  paymentHistoryList: PaymentHistory[];
}

export type PaymentStatus = keyof typeof GROOMER_PAYMENT_STATUS | keyof typeof VET_PAYMENT_STATUS;

export interface PaymentHistory {
  reservationId: number;
  recipientImageUrl: string | null;
  recipientName: string;
  shopName: string;
  paymentDate: string;
  status: PaymentStatus;
}

export interface GetPaymentHistoryDetailResponse {}
export interface GetPaymentHistoryRequestParams {
  reservationId: number;
}

export interface GetPaymentHistoryResponse {
  reservationId: number;
  reservationStatus: string;
  recipientName: string;
  shopName: string;
  schedule: string;
  deposit: number;
  customerName: string;
  customerPhoneNumber: string;
  visitorName: string;
  visitorPhoneNumber: string;
}
