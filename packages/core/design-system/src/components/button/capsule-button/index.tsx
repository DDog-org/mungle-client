import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Variant } from './index.types';
import { wrapper } from './index.styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

export function CapsuleButton({ variant = 'solid', disabled = false, children, ...props }: Props) {
  return (
    <button {...props} css={wrapper({ variant, disabled })}>
      {children}
    </button>
  );
}
