import { Text } from '../../text';
import { Size } from './index.types';
import { chipRadio } from './index.styles';

interface Props {
  name?: string;
  label: string;
  value: string | number;
  isSelected?: boolean;
  onChange?: () => void;
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
    <label css={chipRadio({ isSelected, size })} onChange={onChange}>
      <input type="radio" name={name} value={value} />
      <Text typo="body10" color={isSelected ? 'blue200' : 'gray500'}>
        {label}
      </Text>
    </label>
  );
}
