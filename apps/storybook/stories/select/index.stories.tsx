import { useState } from 'react';
import type { Meta } from '@storybook/react';
import { Select } from '@daengle/design-system';

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;

const OPTIONS = [
  { value: '1', label: 'One' },
  { value: '2', label: 'Two' },
  { value: '3', label: 'Three' },
];

export const Default = () => {
  const [selectedValue, setSelectedValue] = useState<{ value: string; label: string }>();

  return (
    <Select
      options={OPTIONS}
      placeholder="탄생년도"
      selectedValue={selectedValue}
      onChange={(option) => setSelectedValue(option)}
    />
  );
};
