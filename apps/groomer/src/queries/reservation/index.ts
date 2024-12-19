import { useQuery } from '@tanstack/react-query';
import {
  GetGroomerPetInfoRequestParams,
  GetGroomerPetInfoResponse,
  GetGroomerWeekRequestParams,
  GetGroomerWeekResponse,
} from '~/models/reservation';
import { QUERY_KEYS } from '../query-keys';
import { getBreedList, getGroomerPetInfo, getGroomerWeek } from '~/apis/reservation';

export const useGetGroomerWeekQuery = (params: GetGroomerWeekRequestParams) => {
  return useQuery<GetGroomerWeekResponse>({
    queryKey: [QUERY_KEYS.GET_GROOMER_WEEK, params],
    queryFn: () => {
      return getGroomerWeek(params);
    },
  });
};

export const useGetGroomerPetInfoQuery = (params: GetGroomerPetInfoRequestParams) => {
  return useQuery<GetGroomerPetInfoResponse>({
    queryKey: [QUERY_KEYS.GET_GROOMER_PETINFO, params],
    queryFn: () => {
      return getGroomerPetInfo(params);
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
