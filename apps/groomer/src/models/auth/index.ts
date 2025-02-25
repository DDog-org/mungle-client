import { GROOMER_BADGES } from '~/constants';

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
export interface PatchGroomerProfileResponse {
  requestResult: string;
}

export interface PatchGroomerProfileRequestBody {
  image: string;
  instagramId: string | null;
  introduction: string | null;
}

export interface GetGroomerProfileResponse {
  imageUrl: string;
  name: string;
  badges: (keyof typeof GROOMER_BADGES)[];
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

export interface GetGroomerValidateResponse {
  isValidateMember: boolean;
}

export interface GetGroomerShopInfoResponse {
  imageUrlList: string[];
  shopId: number;
  shopName: string;
  startTime: string;
  endTime: string;
  closedDays: string[];
  phoneNumber: string;
  address: string;
  detailAddress: string;
  introduction: string;
}

export interface PatchGroomerShopInfoRequestBody {
  shopId: number;
  imageUrlList: string[];
  startTime: string;
  endTime: string;
  closedDays: string[];
  phoneNumber: string;
  introduction: string;
}

export interface PatchGroomerShopInfoResponse {
  requestResult: string;
}
