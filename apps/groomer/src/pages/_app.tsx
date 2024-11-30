import type { AppProps } from 'next/app';
import { QueryProvider } from '@daengle/services/providers';
import { GlobalStyle, Layout } from '@daengle/design-system';
import { initMSW } from '~/mocks/init-msw';

initMSW();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <GlobalStyle>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalStyle>
    </QueryProvider>
  );
}
