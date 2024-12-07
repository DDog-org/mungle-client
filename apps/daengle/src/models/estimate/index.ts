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
