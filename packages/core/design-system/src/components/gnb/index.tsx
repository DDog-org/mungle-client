import { ReactNode, useMemo } from 'react';
import { Text } from '../text';
import { menuItem, wrapper } from './index.styles';

interface MenuItem {
  name: string;
  icon: {
    active: ReactNode;
    inactive: ReactNode;
  };
  path: string;
  canGuest: boolean;
}

interface Props {
  menus: MenuItem[];
  activePath: string;
  onNavigate: (path: string) => void;
}

export function GNB({ menus, activePath, onNavigate }: Props) {
  const isActiveMenu = useMemo(() => (path: string) => activePath === path, [activePath]);

  return (
    <nav css={wrapper}>
      {menus.map((menu) => (
        <button key={menu.path} css={menuItem} onClick={() => onNavigate(menu.path)}>
          {isActiveMenu(menu.path) ? menu.icon.active : menu.icon.inactive}
          <Text typo="body11" color={isActiveMenu(menu.path) ? 'black' : 'gray400'}>
            {menu.name}
          </Text>
        </button>
      ))}
    </nav>
  );
}
