import { useQuery } from '@tanstack/react-query';
import { getUserEstimateList } from '~/apis';
import { GetUserEstimateListResponse } from '~/models/estimate';

import { QUERY_KEYS } from '~/queries/query-keys';

export const useUserEstimateListQuery = () => {
  return useQuery<GetUserEstimateListResponse>({
    queryKey: QUERY_KEYS.GET_DAENGLE_ESTIMATE_LIST,
    queryFn: async () => {
      try {
        const data = await getUserEstimateList();
        return data;
      } catch (error) {
        throw new Error('견적 리스트를 가져오는 데 실패했습니다.');
      }
    },
  });
};
