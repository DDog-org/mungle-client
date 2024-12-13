export interface GetVetEstimateGeneralListResponse {
  estimates: VetEstimateGeneralList[];
}

export interface VetEstimateGeneralList {
  id: number;
  imageUrl: string;
  nickname: string;
  proposal: 'GENERAL';
  significant: string;
  reservedDate: string;
}

export interface GetVetEstimateDesignationListResponse {
  estimates: VetEstimateDesignationList[];
}

export interface VetEstimateDesignationList {
  id: number;
  imageUrl: string;
  nickname: string;
  proposal: 'DESIGNATION';
  significant: string;
  reservedDate: string;
}
