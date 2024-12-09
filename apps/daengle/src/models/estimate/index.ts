export interface PostUserEstimateGroomerUserInfoRequestBody {
  groomerId: number | null;
}

export interface PostUserEstimateGroomerUserInfoResponse {
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

export interface PostUserEstimateGroomingRequestBody {
  groomerId: number;
  petId: number;
  address: string;
  reservedDate: string;
  desiredStyle: string;
  requirements: string;
}

export interface PostUserEstimateGroomingResponse {
  requestResult: string;
}
