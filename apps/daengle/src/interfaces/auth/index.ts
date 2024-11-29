import { PostJoinWithoutPetRequestBody } from '~/models';

export type UserInfoFormFormType = Omit<PostJoinWithoutPetRequestBody, 'email' | 'role'>;

export interface UserInfoFormType {
  form: UserInfoFormFormType;
  isAvailableNickname: boolean;
}
