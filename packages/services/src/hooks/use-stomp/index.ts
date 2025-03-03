import { useCallback, useRef, useEffect } from 'react';
import { Client, IMessage } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

interface Props {
  url: string;
  topic: string;
  onMessage: (message: any) => void;
}

export function useStomp({ url, topic, onMessage }: Props) {
  const clientRef = useRef<Client | null>(null);

  const connect = useCallback(() => {
    if (clientRef.current) {
      return;
    }

    const client = new Client({
      webSocketFactory: () => new SockJS(url),
      onConnect: () => {
        client.subscribe(topic, (message: IMessage) => {
          const parsedMessage = JSON.parse(message.body);
          onMessage(parsedMessage);
        });
      },
      onDisconnect: () => {},
    });

    client.activate();
    clientRef.current = client;
  }, [url, topic, onMessage]);

  const sendMessage = (destination: string, body: any) => {
    if (clientRef.current?.connected) {
      clientRef.current.publish({
        destination,
        body: JSON.stringify(body),
      });
    }
  };

  useEffect(() => {
    connect();
    return () => {
      clientRef.current?.deactivate();
      clientRef.current = null;
    };
  }, [connect]);

  return { connect, sendMessage };
}
