import { AppBar, Layout } from '@daengle/design-system';
import VetInfo from '~/components/onboarding/vet-info';

export default function Onboarding() {
  return (
    <Layout>
      <AppBar />
      <VetInfo />
    </Layout>
  );
}
