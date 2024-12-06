export interface postUserPetInfoBody {
  groomerId: number;
}

export interface postUserPetsInfoResponse {
  groomerImage: string | null;
  groomerName: string;
  shopName: string;
  address: string;
  petInfos: petInfos[];
}

export interface petInfos {
  petId: number;
  image: string | null;
  name: string;
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
