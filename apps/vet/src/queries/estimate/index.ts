import { useQuery } from '@tanstack/react-query';
import {
  GetVetEstimateDesignationListResponse,
  GetVetEstimateDetailRequestParams,
  GetVetEstimateDetailResponse,
  GetVetEstimateGeneralListResponse,
} from '~/models/estimate';
import { QUERY_KEYS } from '../query-keys';
import {
  getVetEstimateDesignationList,
  getVetEstimateDetail,
  getVetEstimateGeneralList,
} from '~/apis/estimate';

export const useVetEstimateGeneralListQuery = () => {
  return useQuery<GetVetEstimateGeneralListResponse>({
    queryKey: QUERY_KEYS.GET_VET_ESTIMATE_GENERAL_LIST,
    queryFn: () => {
      return getVetEstimateGeneralList();
    },
  });
};

export const useVetEstimateDesignationListQuery = () => {
  return useQuery<GetVetEstimateDesignationListResponse>({
    queryKey: QUERY_KEYS.GET_VET_ESTIMATE_DESIGNATION_LIST,
    queryFn: () => {
      return getVetEstimateDesignationList();
    },
  });
};

export const useVetEstimateDetailQuery = (params: GetVetEstimateDetailRequestParams) => {
  return useQuery<GetVetEstimateDetailResponse>({
    queryKey: [QUERY_KEYS.GET_VET_ESTIMATE_DETAIL, params],
    queryFn: () => {
      return getVetEstimateDetail(params);
    },
  });
};
