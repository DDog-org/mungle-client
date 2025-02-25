import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta
          name="description"
          content="댕글은 반려견 견주와 반려견 미용샵 및 병원을 연결해주는 견적 매칭 플랫폼입니다. 간편한 요청으로 맞춤형 견적을 받고, 믿을 수 있는 전문가를 만나보세요!"
        />
        <meta
          name="keywords"
          content="댕글, 반려견, 견적 매칭, 미용샵, 동물병원, 반려견 미용, 반려견 건강, 견주 서비스, 반려동물 플랫폼"
        />
        <meta property="og:title" content="댕글 - 반려견 미용과 병원 견적 매칭 플랫폼" />
        <meta
          property="og:description"
          content="댕글에서 쉽고 빠르게 반려견 미용과 병원 서비스를 위한 견적을 받아보세요. 신뢰할 수 있는 전문가를 찾아드립니다."
        />
        {/* <meta
          property="og:image"
          content="https://daengle.s3.ap-northeast-2.amazonaws.com/user/pet-profile-images/og_image_daengle.png"
        /> */}
        <meta property="og:url" content="https://www.daengle.com" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <div id="portal-container" />
        <NextScript />
      </body>
    </Html>
  );
}
