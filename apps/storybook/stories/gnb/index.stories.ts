import type { Meta, StoryObj } from '@storybook/react';
import { GNB } from '@daengle/design-system';

const meta = {
  title: 'Components/GNB',
  component: GNB,
  tags: ['autodocs'],
} satisfies Meta<typeof GNB>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
