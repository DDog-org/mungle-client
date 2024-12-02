import type { AppProps } from 'next/app';
import { GlobalStyle, Layout } from '@daengle/design-system';
import { initMSW } from '~/mocks/init-msw';

initMSW();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStyle>
      <Component {...pageProps} />
    </GlobalStyle>
  );
}
