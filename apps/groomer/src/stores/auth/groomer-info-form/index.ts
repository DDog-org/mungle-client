import { create } from 'zustand';
import { GroomerInfoForm } from '~/interfaces/auth';

export interface GroomerInfoFormType {
  groomerInfoForm: GroomerInfoForm;
  setGroomerInfoForm: (item: Partial<GroomerInfoForm>) => void;
}

export const useGroomerInfoFormStore = create<GroomerInfoFormType>((set) => ({
  groomerInfoForm: {
    name: '',
    phoneNumber: '',
    shopName: '',
    address: '',
    detailAddress: '',
    businessLicenses: [],
    licenses: [],
    email: '',
  },
  setGroomerInfoForm: (item: Partial<GroomerInfoForm>) =>
    set((prev) => ({
      groomerInfoForm: { ...prev.groomerInfoForm, ...item },
    })),
}));
