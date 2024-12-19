import { Text } from '../text';
import { radio, radioGroup } from './index.styles';

interface RadioGroupProps {
  items: { value: string; label: string }[];
  onChange: (value: string) => void;
  defaultValue?: string;
}

export function RadioGroup({ items, onChange, defaultValue }: RadioGroupProps) {
  return (
    <div css={radioGroup}>
      {items.map((item) => (
        <Radio
          key={item.value}
          value={item.value}
          label={item.label}
          onChange={() => onChange(item.value)}
          defaultValue={defaultValue}
        />
      ))}
    </div>
  );
}

interface RadioProps {
  name?: string;
  value: string;
  label: string;
  onChange?: () => void;
  defaultValue?: string;
}

function Radio({ name = 'radio-group', value, label, onChange, defaultValue }: RadioProps) {
  return (
    <label css={radio} onChange={onChange}>
      <input type="radio" name={name} value={value} defaultChecked={defaultValue === value} />
      <Text typo="body11">{label}</Text>
    </label>
  );
}
