import { create } from 'zustand';
interface AddressFormType {
  addressForm: string;
  setAddressForm: (address: string) => void;
}

export const useAddressFormStore = create<AddressFormType>((set) => ({
  addressForm: '서울 강남구 역삼동',
  setAddressForm: (addressForm) =>
    set(() => ({
      addressForm,
    })),
}));
