import { ButtonHTMLAttributes, ReactNode } from 'react';
import { wrapper } from './index.styles';
import { Size } from './index.types';
import { colors } from '../../../foundation';
import { Service } from '../../../types';

type KeyOfColors = keyof typeof colors;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  isSelected?: boolean;
  isPartnerSelected?: boolean | null;
  service?: Service;
  children: ReactNode;
}

export function ChipToggleButton({
  size = 'fluid',
  disabled = false,
  isSelected = false,
  isPartnerSelected = false,
  service = 'daengle',
  children,
  ...props
}: Props) {
  return (
    <button {...props} css={wrapper({ isSelected, size, disabled, isPartnerSelected, service })}>
      {children}
    </button>
  );
}
