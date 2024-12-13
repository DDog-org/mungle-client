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
  licenses: license[];
}

export interface license {
  name: string;
  acquisitionDate: string;
}
export interface PatchGroomerInfoResponse {
  requestResult: string;
}

export interface PatchGroomerInfoRequestBody {
  image: string;
  introduction: string;
}
