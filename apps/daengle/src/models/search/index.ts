import { GROOMER_SEARCH_TAG, VET_SEARCH_TAG } from '~/constants/search';

export interface GetUserSearchRequestParams {
  page?: number;
  size?: number;
  address: string;
  keyword: string;
  tag: string;
}
export interface GetUserGroomerSearchResponse {
  page: number;
  size: number;
  totalElements: number;
  result: {
    partnerId: number;
    partnerName: string;
    partnerImage: string;
    groomingBadges: (keyof typeof GROOMER_SEARCH_TAG)[];
  }[];
}
export interface GetUserVetSearchResponse {
  page: number;
  size: number;
  totalElements: number;
  result: {
    partnerId: number;
    partnerName: string;
    partnerImage: string;
    careBadges: (keyof typeof VET_SEARCH_TAG)[];
  }[];
}
