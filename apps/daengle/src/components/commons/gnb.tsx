import { useRouter } from 'next/router';
import { GNB as DaengleGNB } from '@daengle/design-system';
import { MENUS } from '~/constants/commons';

export function GNB() {
  const router = useRouter();

  return (
    <DaengleGNB
      menus={MENUS}
      activePath={router.pathname}
      onNavigate={(path: string) => router.push(path)}
    />
  );
}
