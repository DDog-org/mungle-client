import { useQuery } from '@tanstack/react-query';
import {
  GetUserReservationCareDetailRequestParams,
  GetUserReservationCareDetailResponse,
  GetUserReservationCareListResponse,
  GetUserReservationGroomingDetailRequestParams,
  GetUserReservationGroomingDetailResponse,
  GetUserReservationGroomingListResponse,
} from '~/models/reservation';
import { QUERY_KEYS } from '../query-keys';
import {
  getUserReservationCareDetail,
  getUserReservationCareList,
  getUserReservationGroomingDetail,
  getUserReservationGroomingList,
} from '~/apis/reservation';

export const useUserReservationGroomingListQuery = () => {
  return useQuery<GetUserReservationGroomingListResponse>({
    queryKey: QUERY_KEYS.GET_USER_RESERVATION_GROOMING_LIST,
    queryFn: () => {
      return getUserReservationGroomingList();
    },
  });
};

export const useUserReservationCareListQuery = () => {
  return useQuery<GetUserReservationCareListResponse>({
    queryKey: QUERY_KEYS.GET_USER_RESERVATION_CARE_LIST,
    queryFn: () => {
      return getUserReservationCareList();
    },
  });
};

export const useUserReservationGroomingDetailQuery = (
  params: GetUserReservationGroomingDetailRequestParams,
  enabled: boolean
) => {
  return useQuery<GetUserReservationGroomingDetailResponse>({
    queryKey: [QUERY_KEYS.GET_USER_RESERVATION_GROOMING_DETAIL, params],
    queryFn: () => {
      return getUserReservationGroomingDetail(params);
    },
    enabled,
  });
};

export const useUserReservationCareDetailQuery = (
  params: GetUserReservationCareDetailRequestParams,
  enabled: boolean
) => {
  return useQuery<GetUserReservationCareDetailResponse>({
    queryKey: [QUERY_KEYS.GET_USER_RESERVATION_CARE_DETAIL, params],
    queryFn: () => {
      return getUserReservationCareDetail(params);
    },
    enabled,
  });
};
