import { GROOMER_PAYMENT_STATUS, VET_PAYMENT_STATUS } from '~/constants/payment';

export interface GroomerPaymentHistoryItem {
  reservationId: number;
  recipientImageUrl: string | null;
  recipientName: string;
  shopName: string;
  paymentDate: string;
  status: keyof typeof GROOMER_PAYMENT_STATUS;
}

export interface VetPaymentHistoryItem {
  reservationId: number;
  recipientImageUrl: string | null;
  recipientName: string;
  shopName: string;
  paymentDate: string;
  status: keyof typeof VET_PAYMENT_STATUS;
}
