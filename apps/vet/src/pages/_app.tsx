import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DialogProvider, GlobalStyle, ToastProvider } from '@daengle/design-system';
import { QueryProvider } from '@daengle/services/providers';
import { initMSW } from '~/mocks/init-msw';

initMSW();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>댕글 - 반려견과 병원 견적 매칭 플랫폼</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
