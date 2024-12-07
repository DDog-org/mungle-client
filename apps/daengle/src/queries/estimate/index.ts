import { useQuery } from '@tanstack/react-query';
import { getEstimateGroomingDetail, getEstimateCareDetail } from '~/apis';
import {
  GroomerDetailResponse,
  CareDetailResponse,
  GetEstimateGroomingDetailParams,
  GetEstimateCareDetailParams,
} from '~/models';
import { QUERY_KEYS } from '~/queries/query-keys';

export const useEstimateGroomingDetailQuery = (params: GetEstimateGroomingDetailParams) => {
  return useQuery<GroomerDetailResponse>({
    queryKey: [QUERY_KEYS.GET_DAENGLE_ESTIMATE_GROOMER_DETAIL, params],
    queryFn: async () => {
      try {
        const data = await getEstimateGroomingDetail(params);
        return data;
      } catch (error) {
        throw new Error('데이터 로딩에 실패했습니다.');
      }
    },
    enabled: !!params,
  });
};

export const useEstimateCareDetailQuery = (params: GetEstimateCareDetailParams) => {
  return useQuery<CareDetailResponse>({
    queryKey: [QUERY_KEYS.GET_DAENGLE_ESTIMATE_VET_DETAIL, params],
    queryFn: async () => {
      try {
        const data = await getEstimateCareDetail(params);
        return data;
      } catch (error) {
        throw new Error('데이터 로딩에 실패했습니다.');
      }
    },
    enabled: !!params,
  });
};
