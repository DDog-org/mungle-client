import { AppBar, Layout } from '@daengle/design-system';
import { useRouter } from 'next/router';
import VetInfo from '~/components/onboarding/vet-info';

export default function Onboarding() {
  const router = useRouter();

  return (
    <Layout>
      <AppBar onBackClick={router.back} suffix={<></>} />
      <VetInfo />
    </Layout>
  );
}
