import { ButtonHTMLAttributes, ReactNode, useState } from 'react';
import { wrapper } from './index.styles';
import { Size } from './index.types';
import { colors } from '../../../foundation';

type KeyOfColors = keyof typeof colors;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  isSelected?: boolean;
  textColor?: KeyOfColors;
  itemValue?: string;
  setSelectedParts?: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedTags?: React.Dispatch<React.SetStateAction<string[]>>;
  children: ReactNode;
}

export function ChipToggleButton({
  size = 'fluid',
  disabled = false,
  itemValue,
  isSelected = false,
  textColor = 'black',
  setSelectedParts,
  setSelectedTags,
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
    if (setSelectedTags && itemValue) {
      setSelectedTags((prev) => {
        if (prev.includes(itemValue)) {
          return prev.filter((tag) => tag !== itemValue);
        }
        return [...prev, itemValue];
      });
    }
  };

  return (
    <button
      {...props}
      value={itemValue}
      css={wrapper({ isSelected: isButtonSelected, size, disabled, textColor })}
      onClick={(event) => (disabled ? undefined : handleButtonToggle(event))}
    >
      {children}
    </button>
  );
}
