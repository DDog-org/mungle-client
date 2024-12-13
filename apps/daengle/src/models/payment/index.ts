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
export interface PostPaymentOrderRequestBody {
  estimateId: number;
  petId: number;
  serviceType: string;
  recipientId: number;
  recipientImageUrl: string;
  recipientName: string;
  shopName: string;
  schedule: string;
  price: number;
  customerName: string;
  customerPhoneNumber: string;
  visitorName: string;
  visitorPhoneNumber: string;
}

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
  hasWrittenReview: boolean;
}

export interface PostPaymentOrderResponse {
  orderId: number;
  accountId: number;
  estimateId: number;
  orderUId: string;
}

export interface PostPaymentValidateRequestBody {
  paymentUid: string;
  estimateId: string;
  orderUid: string;
}

export interface PostPaymentValidateResponse {
  customerId: number;
  reservationId: number;
  paymentId: number;
  price: number;
}
