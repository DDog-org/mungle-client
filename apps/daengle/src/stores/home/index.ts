import { create } from 'zustand';

interface AddressType {
  address: string;
  setAddress: (address: string) => void;
}

export const useAddressStore = create<AddressType>((set) => ({
  address: '서울 강남구 역삼동',
  setAddress: (address: string) => set({ address }),
}));
