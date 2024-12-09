import { useQuery } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';
import {
  getUserEstimateList,
  postUserEstimateGrooming,
  postUserEstimateGroomerUserInfo,
  postUserEstimateCare,
  postUserEstimateVetUserInfo,
  getEstimateGroomingDetail,
  getEstimateCareDetail,
} from '~/apis';

import {
  GetUserEstimateListResponse,
  PostUserEstimateGroomingRequestBody,
  PostUserEstimateGroomerUserInfoRequestBody,
  PostUserEstimateCareRequestBody,
  PostUserEstimateVetUserInfoRequestBody,
} from '~/models/estimate';
import {
  GroomerDetailResponse,
  CareDetailResponse,
  GetEstimateGroomingDetailParams,
  GetEstimateCareDetailParams,
} from '~/interfaces/estimate';

export const useUserEstimateListQuery = () => {
  return useQuery<GetUserEstimateListResponse>({
    queryKey: QUERY_KEYS.GET_DAENGLE_ESTIMATE_LIST,
    queryFn: async () => {
      try {
        const data = await getUserEstimateList();
        return data;
      } catch (error) {
        throw new Error('견적 리스트를 가져오는 데 실패했습니다.');
      }
    },
  });
};

export const usePostUserEstimateGroomerUserInfoMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_ESTIMATE_GROOMER_USER_INFO,
    mutationFn: async (body: PostUserEstimateGroomerUserInfoRequestBody) => {
      try {
        return await postUserEstimateGroomerUserInfo(body);
      } catch (error) {
        throw new Error(String(error));
      }
    },
  });
};

export const usePostUserEstimateGroomingMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_ESTIMATE_GROOMING,
    mutationFn: async (body: PostUserEstimateGroomingRequestBody) => {
      try {
        return await postUserEstimateGrooming(body);
      } catch (error) {
        throw new Error(String(error));
      }
    },
  });
};

export const usePostUserEstimateVetUserInfoMutation = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.POST_USER_ESTIMATE_VET_USER_INFO],
    mutationFn: async (body: PostUserEstimateVetUserInfoRequestBody) => {
      try {
        return await postUserEstimateVetUserInfo(body);
      } catch (error) {
        throw new Error(String(error));
      }
    },
  });
};

export const usePostUserEstimateCareMutation = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.POST_USER_ESTIMATE_CARE],
    mutationFn: async (body: PostUserEstimateCareRequestBody) => {
      try {
        return await postUserEstimateCare(body);
      } catch (error) {
        throw new Error(String(error));
      }
    },
  });
};

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
