import { useMutation } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';
import { postUserPetsInfo } from '~/apis';
import { postUserPetInfoBody } from '~/models/daengle';

export const usePostUserPetsInfoMutation = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.POST_USER_PETS_INFO],
    mutationFn: async (body: postUserPetInfoBody) => {
      try {
        return await postUserPetsInfo(body);
      } catch (error) {
        throw new Error(String(error));
      }
    },
  });
};
