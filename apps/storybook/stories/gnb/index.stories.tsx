import { useState } from 'react';
import type { Meta } from '@storybook/react';
import { GNB, Layout } from '@daengle/design-system';
import { MENUS, PATHS } from './constants';

const meta = {
  title: 'Components/GNB',
  component: GNB,
  tags: ['autodocs'],
} satisfies Meta<typeof GNB>;

export default meta;

export function Default() {
  const [activePath, setActivePath] = useState<string>(PATHS.HOME);

  return (
    <Layout>
      <GNB menus={MENUS} activePath={activePath} onNavigate={(path) => setActivePath(path)} />
    </Layout>
  );
}
