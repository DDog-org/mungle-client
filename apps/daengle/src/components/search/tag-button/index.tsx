import { ButtonHTMLAttributes, ReactNode } from 'react';
import { wrapper } from './index.styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean;
  children: ReactNode;
  onClick: () => void;
}

export function TagButton({ children, onClick, isSelected = false }: Props) {
  return (
    <button css={wrapper({ isSelected })} onClick={onClick}>
      {children}
    </button>
  );
}
