export interface GetGroomerEstimateListResponse {
  success: boolean;
  response: {
    allGroomingEstimates: GroomingEstimateList[];
    designationGroomingEstimates: GroomingEstimateList[];
  };
  error: any;
}

export interface GroomingEstimateList {
  id: number;
  userImage: string;
  nickname: string;
  proposal: 'GENERAL' | 'DESIGNATION';
  petSignificant: string;
  reservedDate: string;
}
