import type { AppProps } from 'next/app';
import { GlobalStyle } from '@daengle/design-system';
import { QueryProvider } from '@daengle/services/providers';
import { initMSW } from '~/mocks/init-msw';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

initMSW();

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryProvider>
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </QueryProvider>
  );
}
