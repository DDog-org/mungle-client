import { AppBar, Empty, Layout } from '@daengle/design-system';
import { AuthLogo } from '@daengle/design-system/icons';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants/commons';

export default function NotFound() {
  const router = useRouter();

  return (
    <Layout>
      <AppBar
        prefix={<AuthLogo width={95} height={25} />}
        onHomeClick={() => router.push(ROUTES.HOME)}
      />
      <Empty
        title="페이지를 찾을 수 없습니다"
        actionLabel="메인으로"
        onActionButtonClick={() => router.push(ROUTES.HOME)}
      />
    </Layout>
  );
}

const wrapper = css`
  width: 100%;
  height: 100%;
`;
