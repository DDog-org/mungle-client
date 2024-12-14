import { AppBar, Layout } from '@daengle/design-system';
import { useRouter } from 'next/router';
import GroomerInfo from '~/components/onboarding/groomer-info';

export default function Onboarding() {
  const router = useRouter();

  return (
    <Layout>
      <AppBar onBackClick={router.back} suffix={<></>} />
      <GroomerInfo />
    </Layout>
  );
}
