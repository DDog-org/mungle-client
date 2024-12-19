import { ChangeEvent, useState, forwardRef, FocusEvent } from 'react';
import { SelectUnfoldActive, SelectUnfoldInactive } from '../../icons';
import { Text } from '../text';
import { select, wrapper, contents } from './index.styles';

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: FocusEvent<HTMLSelectElement>) => void;
  name?: string;
  value?: string | number;
}

export const Select = forwardRef<HTMLSelectElement, Props>(
  ({ options, placeholder, onChange, onBlur, name, value }: Props, ref) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    return (
      <div css={wrapper({ selectedValue: isFocused })}>
        <div css={contents}>
          <Text typo="body10" color={isFocused ? 'blue200' : value ? 'black100' : 'gray200'}>
            {value ? options.find((option) => option.value === String(value))?.label : placeholder}
          </Text>

          {isFocused ? (
            <SelectUnfoldActive width="8px" height="5px" />
          ) : (
            <SelectUnfoldInactive width="8px" height="5px" />
          )}
        </div>

        <select
          css={select}
          ref={ref}
          name={name}
          value={value || ''}
          onFocus={() => setIsFocused(true)}
          onBlur={(e: FocusEvent<HTMLSelectElement>) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          onChange={onChange}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

Select.displayName = 'Select';
