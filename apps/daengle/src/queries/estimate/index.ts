import { useQuery } from '@tanstack/react-query';
import { getDaengleEstimateList } from '~/apis';
import { GetDaengleEstimateListResponse } from '~/models';
import { QUERY_KEYS } from '~/queries/query-keys';

export const useDaengleEstimateListQuery = () => {
  return useQuery<GetDaengleEstimateListResponse>({
    queryKey: QUERY_KEYS.GET_DAENGLE_ESTIMATE_LIST,
    queryFn: async () => {
      try {
        const data = await getDaengleEstimateList();
        return data;
      } catch (error) {
        throw new Error('견적 리스트를 가져오는 데 실패했습니다.');
      }
    },
  });
};
