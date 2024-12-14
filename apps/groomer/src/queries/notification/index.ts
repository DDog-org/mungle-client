import { useQuery } from '@tanstack/react-query';
import { getGroomerSchedule } from '~/apis';
import { QUERY_KEYS } from '../query-keys';

export const useGetGroomerSchedule = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_GROOMER_SCHEDULE,
    queryFn: getGroomerSchedule,
  });
};
