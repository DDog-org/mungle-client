import { useMutation, useQuery } from '@tanstack/react-query';
import {
  GetGroomerEstimateDesignationListResponse,
  GetGroomerEstimateDetailRequestParams,
  GetGroomerEstimateDetailResponse,
  GetGroomerEstimateGeneralListResponse,
  PostGroomerEstimateBody,
} from '~/models/estimate';
import {
  getGroomerEstimateDetail,
  postGroomerEstimate,
  getGroomerEstimateGeneralList,
  getGroomerEstimateDesignationList,
} from '~/apis';
import { QUERY_KEYS } from '~/queries/query-keys';

export const useGroomerEstimateGeneralListQuery = () => {
  return useQuery<GetGroomerEstimateGeneralListResponse>({
    queryKey: QUERY_KEYS.GET_GROOMER_ESTIMATE_GENERAL_LIST,
    queryFn: () => {
      return getGroomerEstimateGeneralList();
    },
  });
};

export const useGroomerEstimateDesignationListQuery = () => {
  return useQuery<GetGroomerEstimateDesignationListResponse>({
    queryKey: QUERY_KEYS.GET_GROOMER_ESTIMATE_DESIGNATION_LIST,
    queryFn: () => {
      return getGroomerEstimateDesignationList();
    },
  });
};

export const useGroomerEstimateDetailQuery = (params: GetGroomerEstimateDetailRequestParams) => {
  return useQuery<GetGroomerEstimateDetailResponse>({
    queryKey: [QUERY_KEYS.GET_GROOMER_ESTIMATES_DETAIL, params],
    queryFn: () => {
      return getGroomerEstimateDetail(params);
    },
  });
};

export const usePostGroomerEstimateMutation = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.POST_GROOMER_ESTIMATE],
    mutationFn: async (body: PostGroomerEstimateBody) => {
      try {
        return await postGroomerEstimate(body);
      } catch (error) {
        throw new Error('데이터 전송에 실패하였습니다.');
      }
    },
  });
};
