import { Input } from '@daengle/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '닉네임',
    placeholder: '닉네임을 입력해 주세요.',
  },
};

export const Focused: Story = {
  args: {
    label: '닉네임',
    autoFocus: true,
    placeholder: '닉네임을 입력해 주세요.',
  },
};

export const Error: Story = {
  args: {
    label: '닉네임',
    errorMessage: '이미 존재하는 닉네임입니다.',
  },
};

export const Confirmed: Story = {
  args: {
    label: '닉네임',
    confirmMessage: '닉네임이 확인되었습니다.',
  },
};

export const Disabled: Story = {
  args: {
    label: '이메일',
    value: 'daengle@deangle.com',
    disabled: true,
  },
};
