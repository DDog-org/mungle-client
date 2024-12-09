import { useMutation, useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '~/queries/query-keys';
import {
  getBreedList,
  getUserInfo,
  patchUserInfo,
  postAvailableNickname,
  postJoinWithoutPet,
  postJoinWithPet,
  postKakao,
} from '~/apis';
import {
  PatchUserInfoRequestBody,
  PostAvailableNicknameRequestBody,
  PostJoinWithoutPetRequestBody,
  PostJoinWithPetRequestBody,
  PostKakaoRequestBody,
} from '~/models';

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

export const usePostJoinWithoutPetMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_JOIN_WITHOUT_PET,
    mutationFn: async (body: PostJoinWithoutPetRequestBody) => {
      try {
        return await postJoinWithoutPet(body);
      } catch (error) {
        throw new Error(String(error));
      }
    },
  });
};

export const usePostAvailableNicknameMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_AVAILABLE_NICKNAME,
    mutationFn: async (body: PostAvailableNicknameRequestBody) => {
      try {
        return await postAvailableNickname(body);
      } catch (error) {
        throw new Error(String(error));
      }
    },
  });
};

export const useGetBreedListQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_BREED_LIST,
    queryFn: async () => {
      try {
        return await getBreedList();
      } catch (error) {
        throw new Error(String(error));
      }
    },
    select: (data) => data?.breedList,
  });
};

export const usePostJoinWithPetMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_JOIN_WITH_PET,
    mutationFn: async (body: PostJoinWithPetRequestBody) => {
      try {
        return await postJoinWithPet(body);
      } catch (error) {
        throw new Error(String(error));
      }
    },
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
    mutationFn: async (body: PatchUserInfoRequestBody) => {
      try {
        return await patchUserInfo(body);
      } catch (error) {
        throw new Error(String(error));
      }
    },
  });
};
