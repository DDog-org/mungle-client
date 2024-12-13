export interface PetInfo {
  petId: number;
  name: string;
  imageURL: string;
}

export interface PetEstimateId extends PetInfo {
  estimateId: number;
}

// export interface PetEstimateInfo extends PetInfo {
//   groomingEstimates?: GroomingEstimateType[];
//   careEstimates?: CareEstimateType[];
// }

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

// export interface GroomingEstimateType {
//   groomingEstimateId: number;
//   name: string;
//   daengleMeter: number;
//   proposal: 'GENERAL' | 'DESIGNATION';
//   image: string;
//   shopName?: string | null;
//   reservedDate: string;
//   tags?: string[];
// }

// export interface CareEstimateType {
//   careEstimateId: number;
//   name: string;
//   daengleMeter: number;
//   proposal: 'GENERAL' | 'DESIGNATION';
//   image: string;
//   shopName?: string | null;
//   reservedDate: string;
//   tags?: string[];
// }
