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
