import { useMutation, useQuery } from '@tanstack/react-query';
import {
  deleteChatDelete,
  getChat,
  getChatUserGroomerList,
  getChatUserVetList,
  postChatMessages,
} from '~/apis';
import { QUERY_KEYS } from '../query-keys';
import {
  DeleteChatDeleteRequestParams,
  GetChatParams,
  PostChatMessagesRequestArgs,
} from '~/models/chat';

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

export const usePostChatMessages = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_CHAT_MESSAGES,
    mutationFn: ({ roomId, body }: PostChatMessagesRequestArgs) =>
      postChatMessages({ roomId, body }),
  });
};

export const useDeleteChatDeleteMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.DELETE_CHAT_DELETE,
    mutationFn: deleteChatDelete,
  });
};
