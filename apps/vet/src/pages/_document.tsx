import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0"
        />
        <Main />
        <div id="portal-container" />
        <NextScript />
      </body>
    </Html>
  );
}
