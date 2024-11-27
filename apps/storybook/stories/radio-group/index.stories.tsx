import { useState } from 'react';
import type { Meta } from '@storybook/react';
import { RadioGroup } from '@daengle/design-system';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;

const RADIO_ITEMS = [
  { value: '1', label: '눈' },
  { value: '2', label: '코' },
  { value: '3', label: '입' },
  { value: '4', label: '귀' },
];

export function Radio() {
  const [selected, setSelected] = useState<string>(RADIO_ITEMS[0]?.value ?? '');

  return (
    <RadioGroup
      items={RADIO_ITEMS}
      defaultValue={selected}
      onChange={(value: string) => setSelected(value)}
    />
  );
}
