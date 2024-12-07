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

export interface PostVetJoinRequestBody {
  email: string;
  name: string;
  phoneNumber: string;
  address: string;
  detailAddress: string;
  licenses: string[];
}

export interface PostVetJoinResponse {
  accessToken: string;
}
