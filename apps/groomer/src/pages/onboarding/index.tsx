import { AppBar, Layout } from '@daengle/design-system';
import GroomerInfo from '~/components/onboarding/groomer-info';

export default function Onboarding() {
  return (
    <Layout>
      <AppBar />
      <GroomerInfo />
    </Layout>
  );
}
