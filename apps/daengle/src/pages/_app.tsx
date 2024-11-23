import type { AppProps } from 'next/app';
import { initMSW } from '~/mocks/init-msw';

initMSW();

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
