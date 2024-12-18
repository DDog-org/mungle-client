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

export interface GetUserShopDetailResponse {
  shopId: number;
  shopName: string;
  shopAddress: string;
  shopNumber: string;
  imageUrlList: string[];
  groomers: GroomerInfo[];
  startTime: string;
  endTime: string;
  closedDay: string[];
  introduction: string;
  reviewCount: number;
}

export interface GroomerInfo {
  groomerAccountId: number;
  groomerName: string;
  groomerImage: string | null;
  keywords: string[];
  daengleMeter: number;
  reviewCount: number;
}

export interface GetUserShopDetailRequestParams {
  shopId: number;
}
