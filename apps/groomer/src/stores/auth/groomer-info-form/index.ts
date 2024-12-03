import { create } from 'zustand';
import { GroomerInfoForm } from '~/interfaces/auth';

export interface GroomerInfoFormType {
  groomerInfoForm: GroomerInfoForm;
  setGroomerInfoForm: (item: Partial<GroomerInfoForm>) => void;
}

export const useGroomerInfoFormStore = create<GroomerInfoFormType>((set) => ({
  groomerInfoForm: <GroomerInfoForm>{
    groomerName: '',
    phoneNumber: '',
    storeName: '',
    storeAddress: '',
    certificates: [],
  },
  setGroomerInfoForm: (item: Partial<GroomerInfoForm>) => set((prev) => ({ ...prev, ...item })),
}));
