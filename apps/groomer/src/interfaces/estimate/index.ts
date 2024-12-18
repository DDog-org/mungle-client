export interface GroomingEstimateGeneralList {
  id: number;
  imageUrl: string;
  nickname: string;
  proposal: 'GENERAL';
  significant: string;
  reservedDate: string;
}

export interface GroomingEstimateDesignationList {
  id: number;
  imageUrl: string;
  nickname: string;
  proposal: 'DESIGNATION';
  significant: string;
  reservedDate: string;
}

export interface GroomerEstimateForm {
  id: number;
  reservedDate: string;
  overallOpinion: string;
}
