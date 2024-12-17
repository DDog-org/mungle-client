export interface GetUserVetDetailResponse {
  vetAccountId: number;
  vetName: string;
  vetNumber: string;
  vetAddress: string;
  vetImage: string;
  closedDay: string[];
  startTime: string;
  endTime: string;
  keywords: string[];
  introduction: string | null;
  daengleMeter: number;
  reviewCount: number;
  imageUrlList: string[];
}

export interface GetUserVetDetailRequestParams {
  vetId: number;
}
