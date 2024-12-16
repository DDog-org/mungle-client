export interface GetUserGroomerDetailResponse {
  groomerAccountId: number;
  groomerName: string;
  groomerImage: string;
  keywords: string[];
  introduction: string | null;
  shopId: number;
  shopName: string;
  daengleMeter: number;
  reviewCount: number;
  urlLink: string; //instagram
}

export interface GetUserGroomerDetailRequestParams {
  groomerId: number;
}
