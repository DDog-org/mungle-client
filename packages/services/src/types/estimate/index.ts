export interface GetGroomerEstimateListResponse {
  success: boolean;
  response: {
    allEstimates: GroomingEstimateList[];
    designationEstimates: GroomingEstimateList[];
  };
  error: any;
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
  sucess: boolean;
  response: {
    userImage: string;
    nickname: string;
    address: string;
    reservedDate: string;
    id: number;
    petImage: string;
    name: string;
    birth: number;
    weight: 'SMALL' | 'MEDIUM' | 'LARGE';
    significant: string;
    desiredStyle: string;
    requirements: string;
  };
  error: any;
}
