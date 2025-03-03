export interface VetEstimateGeneralList {
  id: number;
  imageUrl: string;
  nickname: string;
  proposal: 'GENERAL';
  significant: string;
  reservedDate: string;
}

export interface VetEstimateDesignationList {
  id: number;
  imageUrl: string;
  nickname: string;
  proposal: 'DESIGNATION';
  significant: string;
  reservedDate: string;
}

export interface VetEstimateForm {
  id: number;
  reservedDate: string;
  diagnosis: string;
  cause: string;
  treatment: string;
}
