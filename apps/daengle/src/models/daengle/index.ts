export interface postUserPetInfoBody {
  groomerId: number;
}

export interface postUserPetsInfoResponse {
  groomerImage: string;
  groomerName: string;
  shopName: string;
  userImage: string;
  nickname: string;
  address: string;
  petInfos: petInfos[];
}

export interface petInfos {
  id: number;
  image: string;
  name: string;
  significant: string;
  birth: number;
  weight: string;
}
