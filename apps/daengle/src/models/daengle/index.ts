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

export interface postGroomingBody {
  groomerId: number;
  petId: number;
  address: string;
  reservedDate: string;
  desiredStyle: string;
  requirements: string;
}

export interface postGroomingResponse {
  requestResult: string;
}
