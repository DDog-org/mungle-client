import { create } from 'zustand';

interface OrderInfo {
  estimateId: number;
  petId: number;
  serviceType: string;
  recipientId: number;
  recipientImageUrl: string;
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
  estimateId: 7,
  petId: 9,
  serviceType: 'GROOMING',
  recipientId: 5,
  recipientImageUrl:
    'https://daengle.s3.ap-northeast-2.amazonaws.com/groomer/business-licenses/jUAqnDP9NirEoQJIZKlfu',
  recipientName: '유레카미용사',
  shopName: '유레카 헤어샵',
  schedule: '2024-12-15T14:00:00',
  price: 1000, // 고정 예약금
  customerName: '윤정',
  customerPhoneNumber: '010-0001-0002',

  // 상태 업데이트
  setOrderInfo: (orderInfo) =>
    set((state) => ({
      ...state,
      ...orderInfo, // 업데이트된 필드만 적용
    })),
}));
