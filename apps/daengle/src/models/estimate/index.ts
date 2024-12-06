export interface GetDaengleEstimateListResponse {
  petInfos?: PetInfo[];
}

export interface PetInfo {
  petId: number;
  name: string;
  image: string;
  groomingEstimates?: GroomingEstimate[];
  careEstimates?: CareEstimate[];
}

export interface GroomingEstimate {
  groomingEstimateId: number;
  name: string;
  daengleMeter: number;
  proposal: 'GENERAL' | 'DESIGNATION';
  image: string;
  shopName?: string | null;
  reservedDate: string;
  tags?: string[];
}

export interface CareEstimate {
  careEstimateId: number;
  name: string;
  daengleMeter: number;
  proposal: 'GENERAL' | 'DESIGNATION';
  image: string;
  shopName?: string | null;
  reservedDate: string;
  tags?: string[];
}
