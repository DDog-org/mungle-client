import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Size, Variant } from './index.types';
import { wrapper } from './index.styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  children: ReactNode;
}

export function RoundButton({
  variant = 'primary',
  size = 'M',
  fullWidth = false,
  disabled = false,
  children,
  ...props
}: Props) {
  return (
    <button {...props} css={wrapper({ size, variant, disabled, fullWidth })}>
      {children}
    </button>
  );
}
