import { VetEstimateDesignationList, VetEstimateGeneralList } from '~/interfaces/estimate';

export interface GetVetEstimateGeneralListResponse {
  estimates: VetEstimateGeneralList[];
}

export interface GetVetEstimateDesignationListResponse {
  estimates: VetEstimateDesignationList[];
}

export interface GetVetEstimateDetailRequestParams {
  careEstimateId: number;
}

export interface GetVetEstimateDetailResponse {
  userImageUrl: string;
  nickname: string;
  address: string;
  reservedDate: string;
  proposal: 'GENERAL' | 'DESIGNATION';
  petId: number;
  petImageUrl: string;
  petName: string;
  age: number;
  weight: 'SMALL' | 'MEDIUM' | 'LARGE';
  significant: string;
  symptoms: string;
  requirements: string;
  diagnosis: string;
  cause: string;
  treatment: string;
}

export interface PostVetEstimateBody {
  id: number;
  reservedDate: string;
  diagnosis: string;
  cause: string;
  treatment: string;
}

export interface PostVetEstimateResponse {
  estimateId: number;
  requestResult: string;
}
