import { AppBar } from '@daengle/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/AppBar',
  component: AppBar,
  tags: ['autodocs'],
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithTitle: Story = {
  args: {
    title: 'Daengle',
  },
};
