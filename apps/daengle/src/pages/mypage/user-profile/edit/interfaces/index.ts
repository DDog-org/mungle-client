export interface UserProfileInfoEditForm {
  image: File | null;
  nickname: string;
}
export interface UserProfileInfoEditFormType {
  form: UserProfileInfoEditForm;
  isAvailableNickname: boolean;
}
