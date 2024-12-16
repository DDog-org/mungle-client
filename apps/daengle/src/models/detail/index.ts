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
  instagram: string;
}

export interface GetUserGroomerDetailRequestParams {
  groomerId: number;
}
