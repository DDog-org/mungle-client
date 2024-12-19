import { PET_DISLIKE_PARTS_LABELS, PET_SIGNIFICANT_TAGS_LABELS } from '~/constants';
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

export interface PetProfileEditType {
  id: number;
  image: File | null;
  name: string;
  birth: number;
  gender: 'MALE' | 'FEMALE';
  breed: string;
  isNeutered: boolean;
  weight: 'SMALL' | 'MEDIUM' | 'LARGE';
  groomingExperience: boolean;
  isBite: boolean;
  dislikeParts: string[];
  significantTags: string[];
  significant: string;
}

export interface SignificantTags {
  tagName: string;
  tag: string;
}

export interface PetProfileCreateFormType {
  name: string;
  birth: number;
  gender: 'MALE' | 'FEMALE';
  breed: string;
  isNeutered: boolean;
  weight: 'SMALL' | 'MEDIUM' | 'LARGE';
  groomingExperience: boolean;
  isBite: boolean;
  dislikeParts: (keyof typeof PET_DISLIKE_PARTS_LABELS)[];
  significantTags: (keyof typeof PET_SIGNIFICANT_TAGS_LABELS)[];
  significant: string;
}

export interface UserMypageFormType {
  id: number;
  image: string;
  nickname: string;
  reviewCount: number;
  estimateCount: number;
  petInfos: PetInfoForm[];
}

export interface PetInfoForm {
  petId: number;
  petImage: string;
  petName: string;
}

export type PetDislikePartValue = keyof typeof PET_DISLIKE_PARTS_LABELS;
export type PetDislikePart = { value: PetDislikePartValue; label: string };

export type PetSignificantTagValue = keyof typeof PET_SIGNIFICANT_TAGS_LABELS;
export type PetSignificantTag = { value: PetSignificantTagValue; label: string };
