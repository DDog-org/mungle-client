import { useMutation, useQuery } from '@tanstack/react-query';
import { getVetModifyPage, patchVetInfo, getVetInfo, postKakao, postVetJoin } from '~/apis';
import {
  PatchVetInfoRequestBody,
  PostKakaoRequestBody,
  PostVetJoinRequestBody,
} from '~/models/auth';
import { QUERY_KEYS } from '~/queries/query-keys';

export const usePostKakaoMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_KAKAO,
    mutationFn: async (body: PostKakaoRequestBody) => {
      try {
        return await postKakao(body);
      } catch (error) {
        throw new Error(String(error));
      }
    },
  });
};

export const usePostVetJoinMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_VET_JOIN,
    mutationFn: async (body: PostVetJoinRequestBody) => {
      return await postVetJoin(body);
    },
  });
};

export const useGetVetModifyPageQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_VET_MODIFY_PAGE,
    queryFn: getVetModifyPage,
  });
};

export const usePatchVetInfoMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.PATCH_VET_MODIFY_PAGE,
    mutationFn: async (body: PatchVetInfoRequestBody) => {
      return await patchVetInfo(body);
    },
  });
};

export const useGetVetInfoQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_VET_INFO,
    queryFn: getVetInfo,
  });
};
