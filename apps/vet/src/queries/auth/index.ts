import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getVetModifyPage,
  getVetValidate,
  postKakao,
  postVetJoin,
  getVetProfile,
  patchVetProfile,
} from '~/apis';
import { PatchVetProfileRequestBody, PostVetJoinRequestBody } from '~/models/auth';
import { QUERY_KEYS } from '~/queries/query-keys';

export const usePostKakaoMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_KAKAO,
    mutationFn: postKakao,
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

export const usePatchVetProfileMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.PATCH_VET_PROFILE,
    mutationFn: async (body: PatchVetProfileRequestBody) => {
      return await patchVetProfile(body);
    },
  });
};

export const useGetVetValidateQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_VET_VALIDATE,
    queryFn: getVetValidate,
  });
};

export const useGetVetProfileQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_VET_PROFILE,
    queryFn: getVetProfile,
  });
};
