import { PetInfo, PetEstimateId } from '~/interfaces/estimate';

export interface GetUserEstimateGeneralGroomingPetsResponse {
  pets?: PetEstimateId[];
}

export interface GetUserEstimateGeneralGroomingRequestParams {
  petId: number;

  page: number;
  size: number;
}

export interface GetUserEstimateGeneralGroomingResponse {
  estimates?: GetUserEstimateGeneralGroomingList[];
}

export interface GetUserEstimateGeneralGroomingList {
  id: number;
  name: string;
  daengleMeter: number;
  imageUrl: string;
  shopName?: string;
  keywords: string[];
  reservedDate: string;
  tags?: string[];
}

export interface GetUserEstimateGeneralCarePetsResponse {
  pets?: PetEstimateId[];
}

export interface GetUserEstimateGeneralCareRequestParams {
  petId: number;

  page: number;
  size: number;
}

export interface GetUserEstimateGeneralCareResponse {
  estimates?: GetUserEstimateGeneralCareList[];
}

export interface GetUserEstimateGeneralCareList {
  id: number;
  name: string;
  daengleMeter: number;
  imageUrl: string;
  keywords: string[];
  reservedDate: string;
}

///////////

export interface PostUserEstimateGroomerUserInfoRequestBody {
  groomerId: number | null;
}

export interface PostUserEstimateGroomerUserInfoResponse {
  groomerImage: string;
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

export interface PostUserEstimateVetUserInfoRequestBody {
  vetId: number;
}

export interface PostUserEstimateVetUserInfoResponse {
  vetImage: string;
  vetName: string;
  address: string;
  petInfos: PetInfo[];
}

export interface PostUserEstimateCareRequestBody {
  vetId: number;
  petId: number;
  address: string;
  reservedDate: string;
  symptoms: string;
  requirements: string;
}

export interface PostUserEstimateCareResponse {
  requestResult: string;
}
