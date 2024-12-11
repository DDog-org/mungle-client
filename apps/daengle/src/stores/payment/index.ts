import { create } from 'zustand';

interface OrderInfo {
  estimateId: number;
  serviceType: string;
  recipientId: number;
  recipientName: string;
  shopName: string;
  schedule: string;
  price: number; // 고정 예약금
  customerName: string;
  customerPhoneNumber: string;
}

interface OrderInfoStore extends OrderInfo {
  setOrderInfo: (orderInfo: Partial<OrderInfo>) => void;
}

export const useOrderInfoStore = create<OrderInfoStore>((set) => ({
  // 임시 데이터(나중에 소연이가 세팅한 걸로 덮어쓰기)
  estimateId: 11,
  serviceType: 'GROOMING',
  recipientId: 9,
  recipientName: '김미용사',
  shopName: '펫케어샵',
  schedule: '2024-12-12T14:00:00',
  price: 1000, // 고정 예약금
  customerName: '홍길동',
  customerPhoneNumber: '010-1234-5678',

  // 상태 업데이트
  setOrderInfo: (orderInfo) =>
    set((state) => ({
      ...state,
      ...orderInfo, // 업데이트된 필드만 적용
    })),
}));
