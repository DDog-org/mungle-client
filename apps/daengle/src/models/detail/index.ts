export interface GetUserVetDetailResponse {
  vetAccountId: number;
  vetName: string;
  vetAddress: string;
  vetImage: string;
  startTime: string;
  endTime: string;
  keywords: string[];
  introductions: string | null;
  daengleMeter: number;
  reviewCount: number;
  imageUrlList: string[];
}

export interface GetUserVetDetailRequestParams {
  vetId: number;
}
