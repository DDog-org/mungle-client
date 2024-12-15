import { useQuery } from '@tanstack/react-query';
import { getChat, getChatUserGroomerList, getChatUserVetList } from '~/apis';
import { QUERY_KEYS } from '../query-keys';
import { GetChatParams } from '~/models/chat';

export const useGetChatUserGroomerListQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_CHAT_USER_GROOMER_LIST,
    queryFn: getChatUserGroomerList,
  });
};

export const useGetChatUserVetListQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_CHAT_USER_VET_LIST,
    queryFn: getChatUserVetList,
  });
};

export const useGetChatQuery = (otherId?: string) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.GET_CHAT, otherId],
    queryFn: () => getChat({ otherId: Number(otherId) }),
    enabled: !!otherId,
  });
};
