import type { Meta, StoryObj } from '@storybook/react';
import { ActionSheet } from '@daengle/design-system';

const meta = {
  title: 'Components/ActionSheet',
  component: ActionSheet,
  tags: ['autodocs'],
} satisfies Meta<typeof ActionSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menus: [
      {
        label: '견적',
        value: '견적',
        isSelected: true,
      },
      {
        label: '바로 예약',
        value: '바로 예약',
        isSelected: false,
      },
    ],
    onClose: () => {},
  },
};

export const WithTitle: Story = {
  args: {
    title: '누구에게 견적을 요청할까요?',
    menus: [
      {
        label: '미용사',
        value: '미용사',
      },
      {
        label: '병원',
        value: '병원',
      },
    ],
    onClose: () => {},
  },
};
