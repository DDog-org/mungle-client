import type { Meta, StoryObj } from '@storybook/react';
import { Tag, Text } from '@daengle/design-system';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: 'solid',
    children: (
      <Text typo="body2" color="blue200">
        예약금 결제완료
      </Text>
    ),
  },
};

export const Line: Story = {
  args: {
    variant: 'line',
    children: (
      <Text typo="body2" color="blue200">
        #맞춤 케어를 잘해요
      </Text>
    ),
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: (
      <Text typo="body2" color="gray600">
        미용 완료
      </Text>
    ),
  },
};
