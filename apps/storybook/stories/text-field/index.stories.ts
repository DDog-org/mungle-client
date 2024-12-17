import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '@daengle/design-system';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '추가 소견',
    placeholder: '추가 소견을 작성해 주세요',
  },
};

export const Required: Story = {
  args: {
    label: '추가 소견',
    required: true,
    placeholder: '추가 소견을 입력해 주세요',
  },
};

export const Error: Story = {
  args: {
    label: '추가 소견',
    errorMessage: '추가 소견을 작성해 주세요',
  },
};
