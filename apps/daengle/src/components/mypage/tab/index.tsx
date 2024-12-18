import { Text } from '@daengle/design-system';
import { wrapper } from './index.styles';
import { ProfileArrowButton } from '@daengle/design-system/icons';

interface Props {
  variant?: 'default' | 'ghost';
  title: string;
  onClick?: () => void;
  isArrow?: boolean;
}

export function Tab({ variant = 'default', title, onClick, isArrow = true }: Props) {
  return (
    <div css={wrapper} onClick={onClick}>
      <Text typo="body4" color={variant === 'default' ? 'black' : 'gray300'}>
        {title}
      </Text>

      {isArrow && <ProfileArrowButton width={4} height={8} />}
    </div>
  );
}
