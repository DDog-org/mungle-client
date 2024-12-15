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
} from '~/apis';
import {
  PatchUserInfoRequestBody,
  PostJoinWithoutPetRequestBody,
  PostJoinWithPetRequestBody,
  PostKakaoRequestBody,
  PostUserPetRequestBody,
  DeleteUserPetRequestData,
  PatchUserPetInfoRequestBody,
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
export const useGetUserPetInfoQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_USER_PET_INFO,
    queryFn: async () => {
      try {
        return await getUserPetInfo();
      } catch (error) {
        throw new Error(String(error));
      }
    },
  });
};

export const usePostUserPetMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_USER_PET,
    mutationFn: async (body: PostUserPetRequestBody) => {
      try {
        return await postUserPet(body);
      } catch (error) {
        throw new Error(String(error));
      }
    },
  });
};

export const usePatchUserPetInfoMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_USER_PET_INFO,
    mutationFn: async (body: PatchUserPetInfoRequestBody) => {
      try {
        return await patchUserPetInfo(body);
      } catch (error) {
        throw new Error(String(error));
      }
    },
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
