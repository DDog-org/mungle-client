export interface PetInfo {
  petId: number;
  name: string;
  imageURL: string;
}

export interface PetEstimateId extends PetInfo {
  estimateId: number;
}

export interface UserEstimateGeneralGroomingType {
  id: number;
  name: string;
  daengleMeter: number;
  imageUrl: string;
  shopName?: string;
  keywords: string[];
  reservedDate: string;
  tags?: string[];
}

export interface UserEstimateGeneralCareType {
  id: number;
  name: string;
  daengleMeter: number;
  imageUrl: string;
  keywords: string[];
  reservedDate: string;
}

export interface UserEstimateGroomingDetailData {
  groomingEstimateId: number;
  groomerId: number;
  imageURL: string;
  name: string;
  shopId: number;
  shopName?: string | null;
  daengleMeter: number;
  proposal: 'GENERAL' | 'DESIGNATION';
  introduction: string;
  address: string;
  reservedDate: string;
  weight: 'SMALL' | 'MEDIUM' | 'LARGE';
  desiredStyle: string;
  overallOpinion: string;
}

export interface UserEstimateCareDetailData {
  careEstimateId: number;
  vetId: number;
  imageUrl: string;
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
