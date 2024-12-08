import { useQuery } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import {
  getUserEstimateList,
  postUserEstimateGrooming,
  postUserEstimateGroomerUserInfo,
} from '~/apis';
import {
  GetUserEstimateListResponse,
  PostUserEstimateGroomingRequestBody,
  PostUserEstimateGroomerUserInfoRequestBody,
} from '~/models/estimate';

import { QUERY_KEYS } from '~/queries/query-keys';

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
