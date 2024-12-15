import { ButtonHTMLAttributes, ReactNode } from 'react';
import { wrapper } from './index.styles';
import { Size } from './index.types';
import { colors } from '../../../foundation';

type KeyOfColors = keyof typeof colors;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  isSelected?: boolean;
  isPartnerSelected?: boolean | null;
  textColor?: KeyOfColors;
  children: ReactNode;
}

export function ChipToggleButton({
  size = 'fluid',
  disabled = false,
  isSelected = false,
  isPartnerSelected = false,
  textColor = 'black',
  children,
  ...props
}: Props) {
  return (
    <button {...props} css={wrapper({ isSelected, size, disabled, isPartnerSelected, textColor })}>
      {children}
    </button>
  );
}
