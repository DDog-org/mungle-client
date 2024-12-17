import type { AppProps } from 'next/app';
import { DialogProvider, GlobalStyle, ToastProvider } from '@daengle/design-system';
import { QueryProvider } from '@daengle/services/providers';
import { initMSW } from '~/mocks/init-msw';

initMSW();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <GlobalStyle>
        <DialogProvider>
          <ToastProvider>
            <Component {...pageProps} />
          </ToastProvider>
        </DialogProvider>
      </GlobalStyle>
    </QueryProvider>
  );
}
