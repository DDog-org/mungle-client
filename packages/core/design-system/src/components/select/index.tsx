import { ChangeEvent } from 'react';
import { SelectUnfoldActive, SelectUnfoldInactive } from '../../icons';
import { Text } from '../text';
import { select, wrapper, contents } from './index.styles';

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  selectedValue?: Option;
  onChange: (value: Option) => void;
  placeholder?: string;
}

export function Select({ options, selectedValue, onChange, placeholder = '' }: Props) {
  return (
    <div css={wrapper({ selectedValue: Boolean(selectedValue?.value) })}>
      <div css={contents}>
        <Text typo="medium03" color={selectedValue ? 'blue200' : 'gray200'}>
          {selectedValue?.label ?? placeholder}
        </Text>

        {selectedValue ? (
          <SelectUnfoldActive width="8px" height="5px" />
        ) : (
          <SelectUnfoldInactive width="8px" height="5px" />
        )}
      </div>

      <select
        css={select}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          const selectedOption = options.find((option) => option.label === e.target.value);
          if (selectedOption) {
            onChange(selectedOption);
          }
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.label} data-option={option}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
