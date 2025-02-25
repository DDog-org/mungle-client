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
  price: number;
  customerName: string;
  customerPhoneNumber: string;
}

interface OrderInfoStore extends OrderInfo {
  setOrderInfo: (orderInfo: Partial<OrderInfo>) => void;
}

export const useOrderInfoStore = create<OrderInfoStore>((set) => ({
  estimateId: 0,
  petId: 0,
  serviceType: 'GROOMING',
  recipientId: 0,
  recipientImageUrl: '',
  recipientName: '',
  shopName: '',
  schedule: '',
  price: 0,
  customerName: '',
  customerPhoneNumber: '',

  setOrderInfo: (orderInfo) =>
    set((state) => ({
      ...state,
      ...orderInfo,
    })),
}));
