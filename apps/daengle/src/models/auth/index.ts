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
