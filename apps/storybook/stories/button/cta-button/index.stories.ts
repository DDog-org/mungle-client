import type { Meta, StoryObj } from '@storybook/react';
import { CTAButton } from '@daengle/design-system';

const meta = {
  title: 'Components/Buttons/CTAButton',
  component: CTAButton,
  tags: ['autodocs'],
} satisfies Meta<typeof CTAButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Daengle',
  },
};
