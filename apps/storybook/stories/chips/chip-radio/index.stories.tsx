import { useState } from 'react';
import type { Meta } from '@storybook/react';
import { ChipRadio } from '@daengle/design-system';
import { css } from '@emotion/react';

const meta = {
  title: 'Components/Chips/ChipRadioGroup',
  component: ChipRadio,
  tags: ['autodocs'],
} satisfies Meta<typeof ChipRadio>;

export default meta;

const ITEMS = [
  { value: '1', label: '#소형견' },
  { value: '2', label: '#중형견' },
  { value: '3', label: '#대형견' },
  { value: '4', label: '#노견' },
  { value: '5', label: '#입질' },
  { value: '6', label: '#검많은' },
  { value: '7', label: '#활동량많은' },
];

export function Fluid() {
  const [selected, setSelected] = useState<string | number>(ITEMS[0]?.value ?? '');

  return (
    <div css={wrapper}>
      {ITEMS.map((item) => (
        <ChipRadio
          label={item.label}
          value={item.value}
          isSelected={selected === item.value}
          onChange={() => setSelected(item.value)}
          size="fluid"
        />
      ))}
    </div>
  );
}

export function Fixed() {
  const [selected, setSelected] = useState<string | number>(ITEMS[0]?.value ?? '');

  return (
    <div css={wrapper}>
      {ITEMS.map((item) => (
        <ChipRadio
          label={item.label}
          value={item.value}
          isSelected={selected === item.value}
          onChange={() => setSelected(item.value)}
          size="fixed"
        />
      ))}
    </div>
  );
}

export function Full() {
  const [selected, setSelected] = useState<string | number>(ITEMS[0]?.value ?? '');

  return (
    <div css={wrapper}>
      {ITEMS.slice(2).map((item) => (
        <ChipRadio
          label={item.label}
          value={item.value}
          isSelected={selected === item.value}
          onChange={() => setSelected(item.value)}
          size="full"
        />
      ))}
    </div>
  );
}

const wrapper = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
