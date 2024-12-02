export interface GetDaengleEstimateListResponse {
  petInfos?: PetInfo[];
}

export interface PetInfo {
  id: number;
  name: string;
  image: string;
  groomingEstimates?: GroomingEstimate[];
  careEstimates?: CareEstimate[];
}

export interface GroomingEstimate {
  id: number;
  name: string;
  daengleMeter: number;
  image: string;
  shopName?: string | null;
  reservedDate: string;
  tags?: string[];
}

export interface CareEstimate {
  id: number;
  name: string;
  daengleMeter: number;
  image: string;
  shopName?: string | null;
  reservedDate: string;
  tags?: string[];
}
