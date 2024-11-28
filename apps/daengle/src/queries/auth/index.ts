import { useMutation } from '@tanstack/react-query';
import { postJoinWithoutPet } from '~/apis';
import { PostJoinWithoutPetRequestBody } from '~/models';
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
