import { useMutation, useQuery } from '@tanstack/react-query';
import {
  GetVetEstimateDesignationListResponse,
  GetVetEstimateDetailRequestParams,
  GetVetEstimateDetailResponse,
  GetVetEstimateGeneralListResponse,
  PostVetEstimateBody,
} from '~/models/estimate';
import { QUERY_KEYS } from '../query-keys';
import {
  getVetEstimateDesignationList,
  getVetEstimateDetail,
  getVetEstimateGeneralList,
  postVetEstimate,
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

export const usePostVetEstimateMutation = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.POST_VET_ESTIMATE],
    mutationFn: async (body: PostVetEstimateBody) => {
      try {
        return await postVetEstimate(body);
      } catch (error) {
        throw new Error('데이터 전송에 실패하였습니다.');
      }
    },
  });
};
