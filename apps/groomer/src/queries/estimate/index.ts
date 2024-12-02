import { useQuery } from '@tanstack/react-query';
import { GetGroomerEstimateDetailResponse, GroomingEstimateList } from '~/models';
import { getGroomerEstimateList, getGroomerEstimateDetail } from '~/apis';
import { QUERY_KEYS } from '~/queries/query-keys';

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
