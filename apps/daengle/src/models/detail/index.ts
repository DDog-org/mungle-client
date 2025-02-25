import { GROOMER_BADGES, VET_BADGES } from '~/constants';

export interface GetUserVetDetailResponse {
  vetAccountId: number;
  vetName: string;
  vetNumber: string;
  vetAddress: string;
  vetImage: string;
  closedDay: string[];
  startTime: string;
  endTime: string;
  badges: (keyof typeof VET_BADGES)[];
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
  shopNumber: string | null;
  shopImage: string;
  groomers: GroomerInfo[];
  startTime: string;
  endTime: string;
  closedDay: string[];
  introduction: string;
  reviewCount: number | null;
}

export interface GroomerInfo {
  groomerAccountId: number;
  groomerName: string;
  groomerImage: string;
  badges: (keyof typeof GROOMER_BADGES)[];
  daengleMeter: number;
  reviewCount: number;
}

export interface GetUserShopDetailRequestParams {
  shopId: number;
}
export interface GetUserGroomerDetailResponse {
  groomerAccountId: number;
  groomerName: string;
  groomerImage: string;
  badges: (keyof typeof GROOMER_BADGES)[];
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
