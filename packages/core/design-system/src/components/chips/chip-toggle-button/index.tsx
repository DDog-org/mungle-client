import { ButtonHTMLAttributes, ReactNode, useState } from 'react';
import { wrapper } from './index.styles';
import { Size } from './index.types';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  isSelected?: boolean;
  children: ReactNode;
}

export function ChipToggleButton({
  size = 'fluid',
  disabled = false,
  isSelected = false,
  children,
  ...props
}: Props) {
  const [isButtonSelected, setIsButtonSelected] = useState<boolean>(isSelected);
  const handleButtonToggle = () => setIsButtonSelected((prev) => !prev);

  return (
    <button
      {...props}
      css={wrapper({ isSelected: isButtonSelected, size, disabled })}
      onClick={disabled ? undefined : handleButtonToggle}
    >
      {children}
    </button>
  );
}
