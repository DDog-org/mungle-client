import { useQuery } from '@tanstack/react-query';
import { GetGroomerEstimateDetailResponse, GroomingEstimateList } from '@services/types/estimate';
import { getGroomerEstimateList, getGroomerEstimateDetail } from '@services/api/estimate';
import { QUERY_KEYS } from '@services/queries/query-keys';

export const useGroomerEstimateListQuery = () => {
  return useQuery<GroomingEstimateList[]>({
    queryKey: QUERY_KEYS.GET_GROOMER_ESTIMATE_LIST,
    queryFn: async () => {
      try {
        const data = await getGroomerEstimateList();
        return data.allEstimates;
      } catch (error) {
        throw new Error('견적 리스트를 가져오는 데 실패했습니다.');
      }
    },
  });
};

export const useGroomerEstimateDetailQuery = (id: number) => {
  return useQuery<GetGroomerEstimateDetailResponse>({
    queryKey: [QUERY_KEYS.GET_GROOMER_ESTIMATE_DETAIL, id],
    queryFn: async () => {
      try {
        const data = await getGroomerEstimateDetail(id);
        return data;
      } catch (error) {
        throw new Error('견적 상세 정보를 가져오는 데 실패했습니다.');
      }
    },
    enabled: !!id,
  });
};
