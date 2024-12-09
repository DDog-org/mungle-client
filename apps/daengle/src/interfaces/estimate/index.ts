export interface PetInfo {
  petId: number;
  name: string;
  image: string;
}

export interface PetEstimateInfo extends PetInfo {
  groomingEstimates?: GroomingEstimateType[];
  careEstimates?: CareEstimateType[];
}

export interface GroomingEstimateType {
  groomingEstimateId: number;
  name: string;
  daengleMeter: number;
  proposal: 'GENERAL' | 'DESIGNATION';
  image: string;
  shopName?: string | null;
  reservedDate: string;
  tags?: string[];
}

export interface CareEstimateType {
  careEstimateId: number;
  name: string;
  daengleMeter: number;
  proposal: 'GENERAL' | 'DESIGNATION';
  image: string;
  shopName?: string | null;
  reservedDate: string;
  tags?: string[];
}
export interface GroomerDetailResponse {
  groomingEstimateId: number;
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

export interface UserEstimateCareDetailData {
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
