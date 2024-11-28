import { ButtonHTMLAttributes, ReactNode, useState } from 'react';
import { wrapper } from './index.styles';
import { Size } from './index.types';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  children: ReactNode;
}

export function ChipToggleButton({ size = 'fluid', disabled = false, children, ...props }: Props) {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleButtonToggle = () => setIsSelected((prev) => !prev);

  return (
    <button
      {...props}
      css={wrapper({ isSelected, size, disabled })}
      onClick={disabled ? undefined : handleButtonToggle}
    >
      {children}
    </button>
  );
}
