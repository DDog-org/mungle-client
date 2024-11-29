import { create } from 'zustand';
import { USER_ROLE } from '~/constants/role';
import { PostJoinWithoutPetRequestBody } from '~/models';

interface OnboardingForm {
  form: Partial<PostJoinWithoutPetRequestBody> | null;
  setForm: (item: Partial<PostJoinWithoutPetRequestBody>) => void;
}

export const useOnboardingFormStore = create<OnboardingForm>((set) => ({
  form: {
    username: '',
    phoneNumber: '',
    nickname: '',
    address: '',
    email: '',
    role: USER_ROLE,
  },
  setForm: (item: Partial<PostJoinWithoutPetRequestBody>) =>
    set((prev) => ({
      form: { ...prev.form, ...item },
    })),
}));
