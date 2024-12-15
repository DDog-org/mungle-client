import { useQuery } from '@tanstack/react-query';
import {
  GetUserReservationCareListResponse,
  GetUserReservationGroomingListResponse,
} from '~/models/reservation';
import { QUERY_KEYS } from '../query-keys';
import { getUserReservationCareList, getUserReservationGroomingList } from '~/apis/reservation';

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
