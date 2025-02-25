export interface PetInfo {
  petId: number;
  name: string;
  imageUrl: string | null;
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
  accountId: number;
  imageUrl: string;
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
  accountId: number;
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

export interface GeneralVetEstimateDefaultUserData {
  vetImageUrl: string;
  vetName: string;
  address: string;
  petInfos: PetInfo[];
}

export interface UserEstimateCareForm {
  vetId: number | null;
  petId: number | null;
  address: string;
  reservedDate: string;
  symptoms: string;
  requirements: string;
}

export interface UserEstimateGroomingForm {
  groomerId: number | null;
  petId: number | null;
  address: string;
  reservedDate: string;
  requirements: string;
}
