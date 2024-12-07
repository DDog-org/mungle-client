import { useMutation } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';
import { postEstimateGrooming, postEstimateGroomerUserInfo } from '~/apis';
import { PostEstimateGroomingBody, PostEstimateGroomerUserInfoBody } from '~/models/estimate';

export const usePostEstimateGroomerUserInfoMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_ESTIMATE_GROOMER_USER_INFO,
    mutationFn: async (body: PostEstimateGroomerUserInfoBody) => {
      try {
        return await postEstimateGroomerUserInfo(body);
      } catch (error) {
        throw new Error(String(error));
      }
    },
  });
};

export const usePostEstimateGroomingMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_ESTIMATE_GROOMING,
    mutationFn: async (body: PostEstimateGroomingBody) => {
      try {
        return await postEstimateGrooming(body);
      } catch (error) {
        throw new Error(String(error));
      }
    },
  });
};
