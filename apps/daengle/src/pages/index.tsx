import { AppBar, Layout } from '@daengle/design-system';
import { GNB } from '~/components/commons';

export default function Home() {
  return (
    <Layout>
      <AppBar suffix={<span>🔍</span>} />
      <GNB />
    </Layout>
  );
}
