import type { AppProps } from 'next/app';
import { GlobalStyle, DialogProvider } from '@daengle/design-system';
import { QueryProvider } from '@daengle/services/providers';
import { initMSW } from '~/mocks/init-msw';

initMSW();

export default function MyApp({ Component, pageProps }: AppProps & { isAppBarExist?: boolean }) {
  return (
    <QueryProvider>
      <GlobalStyle>
        <DialogProvider>
          <Component {...pageProps} />
        </DialogProvider>
      </GlobalStyle>
    </QueryProvider>
  );
}
