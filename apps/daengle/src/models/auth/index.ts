type Role = 'DAENGLE' | 'GROOMER' | 'VET' | 'ADMIN';

export interface PostJoinWithoutPetRequestBody {
  email: string;
  role: Role;
  username: string;
  phoneNumber: string;
  nickname: string;
  address: string;
}

export interface PostJoinWithoutPetResponse {
  isRegistered: boolean;
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

// TODO: api 변경 후 수정 필요
export type PostJoinWithPetResponse = string;
