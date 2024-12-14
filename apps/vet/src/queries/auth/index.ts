import { useMutation, useQuery } from '@tanstack/react-query';
import { getVetModifyPage, postKakao, postVetJoin } from '~/apis';
import { PostKakaoRequestBody, PostVetJoinRequestBody } from '~/models/auth';
import { QUERY_KEYS } from '~/queries/query-keys';

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

export const usePostVetJoinMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_VET_JOIN,
    mutationFn: async (body: PostVetJoinRequestBody) => {
      return await postVetJoin(body);
    },
  });
};

export const useGetVetModifyPage = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_VET_MODIFY_PAGE,
    queryFn: getVetModifyPage,
  });
};
