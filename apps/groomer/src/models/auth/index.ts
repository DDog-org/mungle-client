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
  introduction: string | null;
  businessLicences: string[];
  licenses: string[];
}
