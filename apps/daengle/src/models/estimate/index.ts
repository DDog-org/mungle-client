import { PetInfo, PetEstimateInfo } from '~/interfaces/estimate';

export interface GetUserEstimateListResponse {
  petInfos?: PetEstimateInfo[];
}

export interface PostUserEstimateGroomerUserInfoRequestBody {
  groomerId: number | null;
}

export interface PostUserEstimateGroomerUserInfoResponse {
  groomerImage: string | null;
  groomerName: string;
  shopName: string;
  address: string;
  petInfos: PetInfo[];
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
