import type { Meta, StoryObj } from '@storybook/react';
import { CapsuleButton } from '@daengle/design-system';

const meta = {
  title: 'Components/Buttons/CapsuleButton',
  component: CapsuleButton,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof CapsuleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '중복검사',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: '중복검사',
    disabled: true,
  },
};
