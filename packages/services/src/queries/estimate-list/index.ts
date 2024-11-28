import { useQuery } from '@tanstack/react-query';
import { GroomingEstimateList } from '@services/types/estimate-list';
import { getGroomerEstimateList } from '@services/api/estimate';
import { QUERY_KEYS } from '@services/queries/query-keys';

export const useGroomerEstimateListQuery = () => {
  return useQuery<GroomingEstimateList[]>({
    queryKey: QUERY_KEYS.GET_GROOMER_ESTIMATE_LIST,
    queryFn: async () => {
      try {
        const data = await getGroomerEstimateList();
        return data.allGroomingEstimates;
      } catch (error) {
        throw new Error('견적 리스트를 가져오는 데 실패했습니다.');
      }
    },
  });
};
