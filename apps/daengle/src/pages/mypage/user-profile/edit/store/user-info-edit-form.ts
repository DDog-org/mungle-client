import { create } from 'zustand';
import { UserProfileInfoEditForm, UserProfileInfoEditFormType } from '../interfaces';

interface UserInfoForm {
  userInfoForm: UserProfileInfoEditFormType;
  setForm: (item: Partial<UserProfileInfoEditForm>) => void;
  setUserInfoForm: (item: Partial<UserProfileInfoEditFormType>) => void;
}

export const useUserInfoFormStore = create<UserInfoForm>((set) => ({
  userInfoForm: <UserProfileInfoEditFormType>{
    form: {
      nickname: '',
      image: '',
    },
    isAvailableNickname: false,
  },
  setForm: (item: Partial<UserProfileInfoEditForm>) =>
    set((prev) => ({
      userInfoForm: { ...prev.userInfoForm, form: { ...prev.userInfoForm.form, ...item } },
    })),
  setUserInfoForm: (item: Partial<UserProfileInfoEditFormType>) =>
    set((prev) => ({
      userInfoForm: { ...prev.userInfoForm, ...item },
    })),
}));
