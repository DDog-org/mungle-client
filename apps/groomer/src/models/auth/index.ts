export interface PostKakaoRequestBody {
  kakaoAccessToken: string;
}

export interface PostKakaoResponse {
  isOnboarding: boolean;
  isPending: boolean;
  email: string | null;
  grantType: 'Bearer' | null;
  accessToken: string | null;
}

export interface PostJoinRequestBody {
  email: string;
  name: string;
  phoneNumber: string;
  shopName: string;
  address: string;
  detailAddress: string;
  businessLicenses: String[];
  licenses: String[];
}

export interface PostJoinResponse {
  accessToken: string;
}

export interface GetGroomerModifyPageResponse {
  image: string;
  name: string;
  phoneNumber: string;
  email: string;
  instagramId: string;
  introduction: string;
  licenses: License[];
}

export interface License {
  name: string;
  acquisitionDate: string;
}
export interface PatchGroomerInfoResponse {
  requestResult: string;
}

export interface PatchGroomerInfoRequestBody {
  image: string;
  instagramId: string | null;
  introduction: string | null;
}

export interface GetGroomerInfoResponse {
  imageUrl: string;
  name: string;
  keywords: string[];
  shopId: number;
  shopName: string;
  introduction: string;
  daengleMeter: number;
}

export interface GetGroomerWithdrawInfoResponse {
  waitingForServiceCount: number;
}

export interface DeleteGroomerResponse {
  accountId: number;
  withdrawDate: string;
}
