import { create } from 'zustand';
import { VetInfoForm } from '~/interfaces/auth';

export interface VetInfoFormType {
  vetInfoForm: VetInfoForm;
  setVetInfoForm: (item: Partial<VetInfoForm>) => void;
}

export const useVetInfoFormStore = create<VetInfoFormType>((set) => ({
  vetInfoForm: {
    name: '',
    phoneNumber: '',
    address: '',
    detailAddress: '',
    licenses: [],
    email: '',
  },
  setVetInfoForm: (item: Partial<VetInfoForm>) =>
    set((prev) => ({
      vetInfoForm: { ...prev.vetInfoForm, ...item },
    })),
}));
