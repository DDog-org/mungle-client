import type { Meta, StoryObj } from '@storybook/react';
import { ChipButton } from '@daengle/design-system';

const meta = {
  title: 'Components/Chips/ChipButton',
  component: ChipButton,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof ChipButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    children: 'Daengle',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Daengle',
  },
};
