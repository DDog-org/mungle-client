import { PetInfo, PetEstimateInfo } from '~/interfaces/estimate';

export interface GetUserEstimateListResponse {
  petInfos?: PetEstimateInfo[];
}

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

export interface PetInfos {
  petId: number;
  image: string;
  name: string;
}

export interface PostUserEstimateVetUserInfoRequestBody {
  vetId: number;
}

export interface PostUserEstimateVetUserInfoResponse {
  vetImage: string;
  vetName: string;
  address: string;
  petInfos: PetInfos[];
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

export interface GroomerDetailResponse {
  estimateId: number;
  groomerId: number;
  image: string;
  name: string;
  shopName?: string | null;
  daengleMeter: number;
  proposal: 'GENERAL' | 'DESIGNATION';
  introduction: string;
  address: string;
  reservedDate: string;
  weight: 'SMALL' | 'MEDIUM' | 'LARGE';
  desiredStyle: string;
  overallOpinion: string;
  tags?: string[];
}

export interface CareDetailResponse {
  careEstimateId: number;
  vetId: number;
  image: string;
  name: string;
  daengleMeter: number;
  introduction: string;
  address: string;
  reservedDate: string;
  diagnosis: string;
  cause: string;
  treatment: string;
  tags?: string[];
}

export interface GetEstimateGroomingDetailParams {
  groomingEstimateId: number;
}

export interface GetEstimateCareDetailParams {
  careEstimateId: number;
}
