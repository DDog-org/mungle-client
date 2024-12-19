import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getVetEstimateDesignationList,
  getVetEstimateDetail,
  getVetEstimateGeneralList,
  postVetEstimate,
} from '~/apis';
import {
  GetVetEstimateDesignationListResponse,
  GetVetEstimateDetailRequestParams,
  GetVetEstimateDetailResponse,
  GetVetEstimateGeneralListResponse,
  PostVetEstimateBody,
} from '~/models';
import { QUERY_KEYS } from '../query-keys';

export const useVetEstimateGeneralListQuery = () => {
  return useQuery<GetVetEstimateGeneralListResponse>({
    queryKey: QUERY_KEYS.GET_VET_ESTIMATE_GENERAL_LIST,
    queryFn: getVetEstimateGeneralList,
  });
};

export const useVetEstimateDesignationListQuery = () => {
  return useQuery<GetVetEstimateDesignationListResponse>({
    queryKey: QUERY_KEYS.GET_VET_ESTIMATE_DESIGNATION_LIST,
    queryFn: getVetEstimateDesignationList,
  });
};

export const useVetEstimateDetailQuery = (params: GetVetEstimateDetailRequestParams) => {
  return useQuery<GetVetEstimateDetailResponse>({
    queryKey: [QUERY_KEYS.GET_VET_ESTIMATES_DETAIL, params],
    queryFn: () => getVetEstimateDetail(params),
  });
};

export const usePostVetEstimateMutation = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.POST_VET_ESTIMATE],
    mutationFn: async (body: PostVetEstimateBody) => await postVetEstimate(body),
  });
};
