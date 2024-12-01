export interface BaseDetailResponse {
  success: boolean;
  error: null | string;
}

export interface GroomerDetailResponse extends BaseDetailResponse {
  response: {
    image: string;
    name: string;
    shopName?: string | null;
    daengleMeter: number;
    introduction: string;
    address: string;
    reservedDate: string;
    weight: 'SMALL' | 'MEDIUM' | 'LARGE';
    desiredStyle: string;
    overallOpinion: string;
    tags?: string[];
  };
}

export interface CareDetailResponse extends BaseDetailResponse {
  response: {
    image: string;
    name: string;
    daengleMeter: number;
    introduction: string;
    address: string;
    reservedDate: string;
    diagnosis: string;
    cause: string;
    treatment: string;
    tags?: string[];
  };
}
