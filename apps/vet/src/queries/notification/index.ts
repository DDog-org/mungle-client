import { useQuery } from '@tanstack/react-query';
import { getVetSchedule } from '~/apis';
import { QUERY_KEYS } from '../query-keys';

export const useGetVetScheduleQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_VET_SCHEDULE,
    queryFn: getVetSchedule,
  });
};
