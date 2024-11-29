import { useMutation } from '@tanstack/react-query';
import { postAvailableNickname, postJoinWithoutPet } from '~/apis';
import { PostAvailableNicknameRequestBody, PostJoinWithoutPetRequestBody } from '~/models';
import { QUERY_KEYS } from '~/queries/query-keys';

export const usePostJoinWithoutPetMutation = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.POST_JOIN_WITHOUT_PET],
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
    mutationKey: [QUERY_KEYS.POST_AVAILABLE_NICKNAME],
    mutationFn: async (body: PostAvailableNicknameRequestBody) => {
      try {
        return await postAvailableNickname(body);
      } catch (error) {
        throw new Error(String(error));
      }
    },
  });
};
