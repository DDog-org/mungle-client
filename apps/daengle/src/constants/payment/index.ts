export const GROOMER_PAYMENT_STATUS = {
  PAYMENT_COMPLETED: '예약금 결제완료',
  PAYMENT_CANCELED: '예약금 결제취소',
  SERVICE_COMPLETED: '미용 완료',
} as const;

export const VET_PAYMENT_STATUS = {
  PAYMENT_COMPLETED: '예약금 결제완료',
  PAYMENT_CANCELED: '예약금 결제취소',
  SERVICE_COMPLETED: '진료 완료',
} as const;

export const PAYMENT_STATUS = {
  PENDING: '결제 대기 중',
  DEPOSIT_PAID: '예약금 결제완료',
  USER_CANCELLED: '결제 취소',
} as const;
