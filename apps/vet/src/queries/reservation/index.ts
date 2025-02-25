import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '../query-keys';
import {
  GetVetPetInfoRequestParams,
  GetVetPetInfoResponse,
  GetVetReservationRequestParams,
  GetVetReservationResponse,
  GetVetWeekRequestParams,
  GetVetWeekResponse,
} from '~/models/reservation';
import { getBreedList, getVetPetInfo, getVetReservation, getVetWeek } from '~/apis/reservation';

export const useGetVetWeekQuery = (params: GetVetWeekRequestParams) => {
  return useQuery<GetVetWeekResponse>({
    queryKey: [QUERY_KEYS.GET_VET_WEEK, params],
    queryFn: () => {
      return getVetWeek(params);
    },
  });
};

export const useGetVetPetInfoQuery = (params: GetVetPetInfoRequestParams) => {
  return useQuery<GetVetPetInfoResponse>({
    queryKey: [QUERY_KEYS.GET_VET_PETINFO, params],
    queryFn: () => {
      return getVetPetInfo(params);
    },
  });
};

export const useGetBreedListQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_BREED_LIST,
    queryFn: getBreedList,
    select: (response) => response?.breedList,
  });
};

export const useGetVetReservationQuery = (params: GetVetReservationRequestParams) => {
  return useQuery<GetVetReservationResponse>({
    queryKey: [QUERY_KEYS.GET_VET_RESERVATION, params],
    queryFn: () => {
      return getVetReservation(params);
    },
  });
};
