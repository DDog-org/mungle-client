import type { AppProps } from 'next/app';
import { GlobalStyle } from '@daengle/design-system';
import { initMSW } from '~/mocks/init-msw';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

initMSW();
const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </QueryClientProvider>
  );
}
