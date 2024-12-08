import { useMutation } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';
import { postUserEstimateGrooming, postUserEstimateGroomerUserInfo } from '~/apis';
import {
  PostUserEstimateGroomingRequestBody,
  PostUserEstimateGroomerUserInfoRequestBody,
} from '~/models/estimate';

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
