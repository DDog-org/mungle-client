import { create } from 'zustand';
import { UserInfoFormFormType, UserInfoFormType } from '~/interfaces/auth';

interface UserInfoForm {
  userInfoForm: UserInfoFormType;
  setForm: (item: Partial<UserInfoFormFormType>) => void;
  setUserInfoForm: (item: Partial<UserInfoFormType>) => void;
}

export const useUserInfoFormStore = create<UserInfoForm>((set) => ({
  userInfoForm: <UserInfoFormType>{
    form: {
      username: '',
      phoneNumber: '',
      nickname: '',
      address: '',
    },
    isAvailableNickname: false,
  },
  setForm: (item: Partial<UserInfoFormFormType>) =>
    set((prev) => ({
      userInfoForm: { ...prev.userInfoForm, form: { ...prev.userInfoForm.form, ...item } },
    })),
  setUserInfoForm: (item: Partial<UserInfoFormType>) =>
    set((prev) => ({
      userInfoForm: { ...prev.userInfoForm, ...item },
    })),
}));
