import { ChangeEvent } from 'react';
import { Text } from '../../text';
import { Size } from './index.types';
import { chipRadio } from './index.styles';

interface Props {
  name?: string;
  label: string;
  value: unknown;
  isSelected?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  size?: Size;
}

export function ChipRadio({
  name = 'chip-radio-group',
  isSelected = false,
  label,
  value,
  onChange,
  size = 'fluid',
}: Props) {
  return (
    <label css={chipRadio({ isSelected, size })}>
      <input type="radio" name={name} value={String(value)} onChange={onChange} />
      <Text typo="body10" color={isSelected ? 'blue200' : 'gray500'}>
        {label}
      </Text>
    </label>
  );
}
