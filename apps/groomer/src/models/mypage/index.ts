export interface GetGroomerMyPageShopInfoResponse {
  shopId: number;
  shopName: string;
  shopAddress: string;
  shopDetailAddress: string;
  imageUrlList: string[];
  groomers: GroomerInfo[];
  startTime: string;
  endTime: string;
  introduction: string;
  closedDay: string[];
  shopNumber: string;
}

export interface GroomerInfo {
  groomerAccountId: number;
  groomerName: string;
  groomerImage: string;
  badges: string[];
  daengleMeter: number;
  reviewCount: number;
}

export interface GetGroomerMyPageShopInfoRequestParams {
  id: number;
}
