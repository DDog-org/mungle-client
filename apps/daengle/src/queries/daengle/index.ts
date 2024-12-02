import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';
import { getUserPetsInfo } from '~/apis';

export const useGetUserPetsInfoQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_USER_PETS_INFO,
    queryFn: async () => {
      try {
        return await getUserPetsInfo();
      } catch {
        throw new Error('지역 정보를 가져오는데 실패했습니다.');
      }
    },
  });
};
