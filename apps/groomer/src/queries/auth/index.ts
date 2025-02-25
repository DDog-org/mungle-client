import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getGroomerModifyPage,
  getGroomerShopInfo,
  patchGroomerShopInfo,
  postJoin,
  postKakao,
  getGroomerWithdrawInfo,
  deleteGroomer,
  getGroomerValidate,
  patchGroomerProfile,
  getGroomerProfile,
} from '~/apis';
import {
  PatchGroomerProfileRequestBody,
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

export const usePatchGroomerProfileMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.PATCH_GROOMER_PROFILE,
    mutationFn: async (body: PatchGroomerProfileRequestBody) => await patchGroomerProfile(body),
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

export const useGetGroomerProfileQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_GROOMER_PROFILE,
    queryFn: getGroomerProfile,
  });
};

export const useGetGroomerWithdrawInfoQuery = ({ enable }: { enable: boolean }) => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_GROOMER_WITHDRAW_INFO,
    queryFn: getGroomerWithdrawInfo,
    enabled: enable,
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
