import { AppBar, Layout } from '@daengle/design-system';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants';

export default function Porfolio() {
  const router = useRouter();
  const { instagram } = router.query;

  return (
    <Layout>
      <AppBar
        onBackClick={router.back}
        onHomeClick={() => router.push(ROUTES.HOME)}
        backgroundColor="white"
      />

      <div css={wrapper}>
        <iframe src={`https://www.instagram.com/${instagram}/embed`} css={embed} allowFullScreen />
      </div>
    </Layout>
  );
}

const wrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const embed = css`
  width: 100%;
  height: 450px;
  border: none;
`;
