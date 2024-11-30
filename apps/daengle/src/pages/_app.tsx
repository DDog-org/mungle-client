import type { AppProps } from 'next/app';
import { QueryProvider } from '@daengle/services/providers';
import { GlobalStyle } from '@daengle/design-system';
import { initMSW } from '~/mocks/init-msw';

initMSW();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </QueryProvider>
  );
}
