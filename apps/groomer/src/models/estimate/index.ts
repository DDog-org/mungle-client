export interface GetGroomerEstimateListResponse {
  allEstimates: GroomingEstimateList[];
  designationEstimates: GroomingEstimateList[];
}

export interface GroomingEstimateList {
  id: number;
  userImage: string;
  nickname: string;
  proposal: 'GENERAL' | 'DESIGNATION';
  significant: string | null;
  reservedDate: string;
}

export interface GetGroomerEstimateDetailResponse {
  userImage: string;
  nickname: string;
  proposal: 'GENERAL' | 'DESIGNATION';
  address: string;
  reservedDate: string;
  id: number;
  petImage: string;
  name: string;
  age: number;
  weight: 'SMALL' | 'MEDIUM' | 'LARGE';
  significant: string | null;
  desiredStyle: string;
  requirements: string;
  overallOpinion?: string;
}
