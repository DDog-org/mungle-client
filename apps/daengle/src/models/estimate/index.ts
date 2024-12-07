export interface PostEstimateGroomerUserInfoBody {
  groomerId: number;
}

export interface PostEstimateGroomerUserInfoResponse {
  groomerImage: string | null;
  groomerName: string;
  shopName: string;
  address: string;
  petInfos: PetInfos[];
}

export interface PetInfos {
  petId: number;
  image: string | null;
  name: string;
}

export interface PostEstimateGroomingBody {
  groomerId: number;
  petId: number;
  address: string;
  reservedDate: string;
  desiredStyle: string;
  requirements: string;
}

export interface PostEstimateGroomingResponse {
  requestResult: string;
}
