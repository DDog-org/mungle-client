import { PET_SIZE } from '@daengle/services/constants';
import {
  GroomingEstimateDesignationList,
  GroomingEstimateGeneralList,
} from '~/interfaces/estimate';

export interface GetGroomerEstimateGeneralListResponse {
  estimates: GroomingEstimateGeneralList[];
}

export interface GetGroomerEstimateDesignationListResponse {
  estimates: GroomingEstimateDesignationList[];
}

export interface GetGroomerEstimateDetailResponse {
  userImageUrl: string;
  nickname: string;
  address: string;
  reservedDate: string;
  proposal: 'GENERAL' | 'DESIGNATION';
  petId: number;
  petImageUrl: string;
  petName: string;
  age: number;
  weight: keyof typeof PET_SIZE;
  significant: string | null;
  desiredStyle: string;
  requirements: string;
  overallOpinion?: string;
}

export interface GetGroomerEstimateDetailRequestParams {
  groomingEstimateId: number;
}

export interface PostGroomerEstimateBody {
  id: number;
  reservedDate: string;
  overallOpinion: string;
}

export interface PostGroomerEstimateResponse {
  estimateId: number;
  requestResult: string;
}
