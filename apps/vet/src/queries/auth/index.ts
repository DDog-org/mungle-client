import { useMutation } from '@tanstack/react-query';
import { postVetJoin } from '~/apis';
import { PostVetJoinRequestBody } from '~/models/auth';
import { QUERY_KEYS } from '~/queries/query-keys';

export const usePostVetJoinMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_VET_JOIN,
    mutationFn: async (body: PostVetJoinRequestBody) => {
      return await postVetJoin(body);
    },
  });
};
