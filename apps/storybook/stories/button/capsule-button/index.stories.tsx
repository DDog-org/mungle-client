import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';
import { CapsuleButton, RoundButton } from '@daengle/design-system';

const meta = {
  title: 'Components/Buttons/CapsuleButton',
  component: CapsuleButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['solid', 'line'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof CapsuleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    children: 'Daengle',
  },
};

export const Line: Story = {
  args: {
    disabled: true,
    children: 'Daengle',
  },
};
