export interface PostKakaoRequestBody {
  kakaoAccessToken: string;
}

export interface PostKakaoResponse {
  response: {
    isOnboarding: boolean;
    isPending: boolean;
    email: string | null;
    grantType: 'Bearer' | null;
    accessToken: string | null;
  };
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

export interface GetVetModifyPageResponse {
  imageUrls: string[];
  name: string;
  startTime: string;
  endTime: string;
  closedDays: string[];
  phoneNumber: string;
  address: string;
  detailAddress: string;
  introduction: string;
}

export interface PatchVetProfileResponse {
  requestResult: string;
}
export interface PatchVetProfileRequestBody {
  imageUrls: string[];
  startTime: string;
  endTime: string;
  closedDays: string[];
  phoneNumber: string;
  introduction: string;
}

export interface GetVetValidateResponse {
  isValidateMember: boolean;
}

export interface GetVetProfileResponse {
  imageUrls: string[];
  name: string;
  keywords: string[];
  closedDays: string[];
  startTime: string;
  endTime: string;
  phoneNumber: number;
  address: string;
  detailAddress: string;
  introduction: string;
  daengleMeter: number;
}
