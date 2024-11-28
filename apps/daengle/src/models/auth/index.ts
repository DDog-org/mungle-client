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
