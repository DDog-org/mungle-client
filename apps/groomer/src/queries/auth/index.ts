import { useMutation } from '@tanstack/react-query';
import { postJoin } from '~/apis';
import { PostJoinRequestBody } from '~/models/auth';
import { QUERY_KEYS } from '~/queries/query-keys';

export const usePostJoinMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_JOIN,
    mutationFn: async (body: PostJoinRequestBody) => {
      return await postJoin(body);
    },
  });
};
