import { DislikeParts, SignificantTags } from '~/pages/mypage/interfaces';

export interface PostKakaoRequestBody {
  kakaoAccessToken: string;
}

export interface PostKakaoResponse {
  isOnboarding: boolean;
  email: string | null;
  grantType: 'Bearer' | null;
  accessToken: string | null;
}

export interface PostJoinWithoutPetRequestBody {
  email: string;
  username: string;
  phoneNumber: string;
  nickname: string;
  address: string;
}

export interface PostJoinWithoutPetResponse {
  accessToken: string;
}

export interface PostAvailableNicknameRequestBody {
  nickname: string;
}

export interface PostAvailableNicknameResponse {
  isAvailable: boolean;
}

export interface GetBreedListResponse {
  breedList: Breed[];
}

export interface Breed {
  breedName: string;
  breed: string;
}

export interface PostJoinWithPetRequestBody extends PostJoinWithoutPetRequestBody {
  petName: string;
  petBirth: number;
  petGender: string;
  isNeutered: boolean;
  breed: string;
  petWeight: string;
}

export interface PostJoinWithPetResponse {
  accessToken: string;
}

export interface GetUserInfoResponse {
  image: string | null;
  nickname: string;
  username: string;
  phoneNumber: string;
  email: string;
}

export interface PatchUserInfoResponse {
  requestResult: string;
}

export interface PatchUserInfoRequestBody {
  image: string;
  nickname: string;
}

export interface PetInfos {
  id: number;
  image: string;
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

export interface DislikePart {
  part: string;
  partName: string;
}
export interface SignificantTag {
  tagName: string;
  tag: string;
}
export interface GetUserPetInfoResponse {
  petDetails: PetInfos[];
}

export interface PostUserPetRequestBody {
  image: string | null;
  name: string;
  birth: number;
  gender: 'MALE' | 'FEMALE';
  breed: string;
  isNeutered: boolean;
  weight: 'SMALL' | 'MEDIUM' | 'LARGE';
  groomingExperience: Boolean;
  isBite: Boolean;
  dislikeParts: DislikePart[];
  significantTags: SignificantTag[];
  significant: string;
}
export type PostUserPetResponse = string;

export interface PostUserPetRequestBody {
  image: string | null;
  name: string;
  birth: number;
  gender: 'MALE' | 'FEMALE';
  breed: string;
  isNeutered: boolean;
  weight: 'SMALL' | 'MEDIUM' | 'LARGE';
  groomingExperience: Boolean;
  isBite: Boolean;
  dislikeParts: DislikePart[];
  significantTags: SignificantTag[];
  significant: string;
}
export type PostUserPetResponse = string;

export interface PatchUserPetInfoBody {
  id: number;
  image: string;
  name: string;
  birth: number;
  gender: 'MALE' | 'FEMALE';
  breed: string;
  isNeutered: boolean;
  weight: 'SMALL' | 'MEDIUM' | 'LARGE';
  groomingExperience: Boolean;
  isBite: Boolean;
  dislikeParts: string[];
  significantTags: string[];
  significant: string;
}

export type PatchUserPetInfoResponse = boolean;
