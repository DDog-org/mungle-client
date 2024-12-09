export interface UserProfileInfoEditForm {
  image: File | null;
  nickname: string;
  isAvailableNickname: boolean;
}
export interface UserProfileInfoEditFormType {
  form: UserProfileInfoEditForm;
  isAvailableNickname: boolean;
}
