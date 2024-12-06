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
