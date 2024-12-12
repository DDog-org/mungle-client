import { PostJoinWithoutPetRequestBody } from '~/models';

export interface UserInfoFormFormType extends PostJoinWithoutPetRequestBody {}

export interface UserInfoFormType {
  form: UserInfoFormFormType;
  isAvailableNickname: boolean;
}

export interface PetInfoFormType {
  petName: string;
  petBirth: number;
  petGender: 'MALE' | 'FEMALE';
  isNeutered: string;
  breed: string;
  petWeight: 'SMALL' | 'MEDIUM' | 'LARGE';
}

export interface UserProfileInfoEditForm {
  image: File | null;
  nickname: string;
  isAvailableNickname: boolean;
}
export interface UserProfileInfoEditFormType {
  form: UserProfileInfoEditForm;
  isAvailableNickname: boolean;
}

export interface PetProfileInfoCreateFormType {
  image: File | null;
  nickname: string;
}
