export interface UserProfileInfoEditForm {
  image: File[];
  nickname: string;
}
export interface UserProfileInfoEditFormType {
  form: UserProfileInfoEditForm;
  isAvailableNickname: boolean;
}
