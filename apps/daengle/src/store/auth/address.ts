import { create } from 'zustand';
import type { Address } from '@daengle/services/libs';

interface SearchAddress {
  address: Address | null;
  setAddress: (address: Address) => void;
}

export const useSearchAddressStore = create<SearchAddress>((set) => {
  return {
    address: null,
    setAddress: (address: Address) => set({ address }),
  };
});
