import { useRouter } from 'next/router';
import { GNB as DaengleGNB, useDialog } from '@daengle/design-system';
import { MENUS, ROUTES } from '~/constants/commons';
import { useGetGroomerValidateQuery } from '~/queries';

export function GNB() {
  const router = useRouter();

  const { open } = useDialog();

  const { data: isValidUser } = useGetGroomerValidateQuery();

  const handleMenuClick = (path: string) => {
    const item = MENUS.find((menu) => menu.path === path);

    if (!item) return;

    if (!item.canGuest && !isValidUser?.isValidateMember) {
      open({
        title: '로그인 후 이용해 주세요',
        primaryActionLabel: '로그인 하기',
        onPrimaryAction: () => router.replace(ROUTES.LOGIN),
        secondaryActionLabel: '닫기',
      });
      return;
    }

    router.push(path);
  };

  return <DaengleGNB menus={MENUS} activePath={router.pathname} onNavigate={handleMenuClick} />;
}
