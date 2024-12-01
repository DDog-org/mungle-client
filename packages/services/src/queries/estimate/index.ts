import { useQuery } from '@tanstack/react-query';
import { getGroomingEstimateDetail, getCareEstimateDetail } from '@services/api/estimate';
import { GroomerDetailResponse, CareDetailResponse } from '@services/types/estimate';
import { QUERY_KEYS } from '../query-keys';

export const useGroomerDetailQuery = (groomingEstimateId: number) => {
  return useQuery<GroomerDetailResponse['response']>({
    queryKey: [QUERY_KEYS.GET_DAENGLE_ESTIMATE_GROOMER_DETAIL, groomingEstimateId],
    queryFn: async () => {
      try {
        const data = await getGroomingEstimateDetail(groomingEstimateId);
        return data;
      } catch (error) {
        throw new Error('데이터 로딩에 실패했습니다.');
      }
    },
    enabled: !!groomingEstimateId,
  });
};

export const useCareDetailQuery = (careEstimateId: number) => {
  return useQuery<CareDetailResponse['response']>({
    queryKey: [QUERY_KEYS.GET_DAENGLE_ESTIMATE_VET_DETAIL, careEstimateId],
    queryFn: async () => {
      try {
        const data = await getCareEstimateDetail(careEstimateId);
        return data;
      } catch (error) {
        throw new Error('데이터 로딩에 실패했습니다.');
      }
    },
    enabled: !!careEstimateId,
  });
};
