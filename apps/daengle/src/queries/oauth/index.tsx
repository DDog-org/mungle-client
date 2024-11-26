import { useMutation } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';
import { postKakaoOauth, postOauthKakao } from '~/api/oauth';

export const usePostKakaoOauth = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_KAKAO_OAUTH,
    mutationFn: async (code: string) => {
      try {
        return await postKakaoOauth(code);
      } catch {
        throw new Error('카카오 토큰을 가져오는데 실패했습니다.');
      }
    },
  });
};
export const usePostOauthKakao = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_OAUTH_KAKAO,
    mutationFn: async ({ accessToken, loginType }: { accessToken: string; loginType: string }) => {
      try {
        return await postOauthKakao(accessToken, loginType);
      } catch {
        throw new Error('토큰을 백엔드로 전송하는데 실패했습니다.');
      }
    },
  });
};
