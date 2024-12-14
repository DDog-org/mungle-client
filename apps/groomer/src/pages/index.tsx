import { useRouter } from 'next/router';
import { AppBar, Layout, RoundButton } from '@daengle/design-system';
import { ROUTES } from '~/constants/commons';
import { GNB } from '~/components/commons';

export default function Home() {
  const router = useRouter();

  return (
    <Layout>
      <AppBar onBackClick={router.back} onHomeClick={() => router.push(ROUTES.HOME)} />

      <div>
        Groomer
        <RoundButton service="partner" size="M" onClick={() => router.push(ROUTES.ESTIMATES)}>
          견적서 리스트 보러가기
        </RoundButton>
      </div>

      <GNB />
    </Layout>
  );
}
