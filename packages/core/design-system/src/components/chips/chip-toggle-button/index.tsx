import { ButtonHTMLAttributes, ReactNode, useState } from 'react';
import { wrapper } from './index.styles';
import { Size } from './index.types';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  isSelected?: boolean;
  itemValue?: string;
  setSelectedParts?: React.Dispatch<React.SetStateAction<string[]>>;
  children: ReactNode;
}

export function ChipToggleButton({
  size = 'fluid',
  disabled = false,
  itemValue,
  isSelected = false,
  setSelectedParts,
  children,
  ...props
}: Props) {
  const [isButtonSelected, setIsButtonSelected] = useState<boolean>(isSelected);

  const handleButtonToggle = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsButtonSelected((prev) => !prev);

    if (setSelectedParts && itemValue) {
      setSelectedParts((prev) => {
        if (prev.includes(itemValue)) {
          return prev.filter((part) => part !== itemValue);
        }
        return [...prev, itemValue];
      });
    }
  };

  return (
    <button
      type="button"
      {...props}
      value={itemValue}
      css={wrapper({ isSelected: isButtonSelected, size, disabled })}
      onClick={(event) => (disabled ? undefined : handleButtonToggle(event))}
    >
      {children}
    </button>
  );
}
