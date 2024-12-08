export interface PostPaymentOrderBody {
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
  accountId: number;
  estimateId: number;
  orderUId: string;
}
