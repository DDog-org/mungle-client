import { useMutation } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';
import {
  postUserEstimateGrooming,
  postUserEstimateGroomerUserInfo,
  postCare,
  postVetUserInfo,
} from '~/apis';
import {
  PostUserEstimateGroomingRequestBody,
  PostUserEstimateGroomerUserInfoRequestBody,
  postCareBody,
  postVetUserInfoBody,
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

export const usePostVetUserInfoMutation = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.POST_VET_USER_INFO],
    mutationFn: async (body: postVetUserInfoBody) => {
      try {
        return await postVetUserInfo(body);
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

export const usePostCareMutation = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.POST_CARE],
    mutationFn: async (body: postCareBody) => {
      try {
        return await postCare(body);
      } catch (error) {
        throw new Error(String(error));
      }
    },
  });
};
