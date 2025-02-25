import type { AppProps } from 'next/app';
import { GlobalStyle, DialogProvider, ToastProvider } from '@daengle/design-system';
import { QueryProvider } from '@daengle/services/providers';
import { initMSW } from '~/mocks/init-msw';
import Head from 'next/head';

initMSW();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>댕글 - 반려견을 위한 견적 매칭 플랫폼</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1.0"
        />
      </Head>
      <QueryProvider>
        <GlobalStyle>
          <DialogProvider>
            <ToastProvider>
              <Component {...pageProps} />
            </ToastProvider>
          </DialogProvider>
        </GlobalStyle>
      </QueryProvider>
    </>
  );
}
