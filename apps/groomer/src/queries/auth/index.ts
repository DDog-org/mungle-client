import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getGroomerInfo,
  getGroomerModifyPage,
  getGroomerShopInfo,
  patchGroomerInfo,
  patchGroomerShopInfo,
  postJoin,
  postKakao,
  getGroomerWithdrawInfo,
  deleteGroomer,
  getGroomerValidate,
} from '~/apis';
import {
  PatchGroomerInfoRequestBody,
  PatchGroomerShopInfoRequestBody,
  PostJoinRequestBody,
  PostKakaoRequestBody,
} from '~/models/auth';
import { QUERY_KEYS } from '~/queries/query-keys';

export const usePostKakaoMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_KAKAO,
    mutationFn: (body: PostKakaoRequestBody) => postKakao(body),
  });
};

export const usePostJoinMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_JOIN,
    mutationFn: async (body: PostJoinRequestBody) => {
      return await postJoin(body);
    },
  });
};

export const useGetGroomerModifyPageQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_GROOMER_MODIFY_PAGE,
    queryFn: getGroomerModifyPage,
  });
};

export const usePatchGroomerInfoMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.PATCH_GROOMER_INFO,
    mutationFn: async (body: PatchGroomerInfoRequestBody) => await patchGroomerInfo(body),
  });
};

export const useGetGroomerShopInfoQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_GROOMER_SHOP_INFO,
    queryFn: getGroomerShopInfo,
  });
};

export const usePatchGroomerShopInfoMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.PATCH_GROOMER_SHOP_INFO,
    mutationFn: async (body: PatchGroomerShopInfoRequestBody) => {
      return await patchGroomerShopInfo(body);
    },
  });
};

export const useGetGroomerInfoQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_GROOMER_INFO,
    queryFn: getGroomerInfo,
  });
};

export const useGetGroomerWithdrawInfoQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_GROOMER_WITHDRAW_INFO,
    queryFn: getGroomerWithdrawInfo,
  });
};

export const useDeleteGroomerMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.DELETE_GROOMER,
    mutationFn: deleteGroomer,
  });
};

export const useGetGroomerValidateQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_GROOMER_VALIDATE,
    queryFn: getGroomerValidate,
  });
};
