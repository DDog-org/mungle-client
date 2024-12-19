import { useMutation, useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '~/queries/query-keys';
import {
  getBreedList,
  getUserInfo,
  getUserValidate,
  patchUserInfo,
  getUserPetInfo,
  postAvailableNickname,
  postJoinWithoutPet,
  postJoinWithPet,
  postKakao,
  postUserPet,
  patchUserPetInfo,
  deleteUserPet,
  getUserMypage,
  getUserWithdrawInfo,
  deleteUserInfo,
} from '~/apis';
import { PostJoinWithPetRequestBody, DeleteUserPetRequestData } from '~/models';

export const usePostKakaoMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_KAKAO,
    mutationFn: postKakao,
  });
};

export const usePostJoinWithoutPetMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_JOIN_WITHOUT_PET,
    mutationFn: postJoinWithoutPet,
  });
};

export const usePostAvailableNicknameMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_AVAILABLE_NICKNAME,
    mutationFn: postAvailableNickname,
  });
};

export const useGetBreedListQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_BREED_LIST,
    queryFn: getBreedList,
    select: (response) => response.breedList,
  });
};

export const usePostJoinWithPetMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_JOIN_WITH_PET,
    mutationFn: async (body: PostJoinWithPetRequestBody) => await postJoinWithPet(body),
  });
};

export const useGetUserProfileInfoQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_USER_PROFILE_INFO,
    queryFn: getUserInfo,
  });
};

export const usePatchUserInfoMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_USER_PROFILE_INFO,
    mutationFn: patchUserInfo,
  });
};
export const useGetUserPetInfoQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_USER_PET_INFO,
    queryFn: getUserPetInfo,
  });
};

export const usePostUserPetMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_USER_PET,
    mutationFn: postUserPet,
  });
};

export const usePatchUserPetInfoMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_USER_PET_INFO,
    mutationFn: patchUserPetInfo,
  });
};

export const useDeleteUserPetMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.DELETE_USER_PET,
    mutationFn: (data: DeleteUserPetRequestData) => deleteUserPet(data),
  });
};

export const useGetUserValidateQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_USER_VALIDATE,
    queryFn: getUserValidate,
  });
};

export const useGetUserMypageQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_USER_MYPAGE,
    queryFn: getUserMypage,
  });
};

export const useGetUserWithdrawInfoQuery = ({ enable }: { enable: boolean }) => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_USER_WITHDRAW_INFO,
    queryFn: getUserWithdrawInfo,
    enabled: enable,
  });
};

export const useDeleteUserInfoMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.DELETE_USER_INFO,
    mutationFn: deleteUserInfo,
  });
};
