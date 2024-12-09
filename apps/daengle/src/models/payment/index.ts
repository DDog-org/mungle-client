export interface PostPaymentOrderRequestBody {
  estimateId: number;
  serviceType: string;
  recipientId: number;
  recipientName: string;
  shopName: string;
  schedule: string;
  price: number;
  customerName: string;
  customerPhoneNumber: string;
  visitorName: string;
  visitorPhoneNumber: string;
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
