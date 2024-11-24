import { Text, TAGS, theme } from '@daengle/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    tag: {
      control: 'select',
      options: Object.keys(TAGS),
      description: 'HTML 텍스트 태그를 지정합니다. 기본값은 `span` 입니다.',
    },
    children: {
      description: '텍스트 내용을 전달합니다.',
    },
    typo: {
      control: 'select',
      options: Object.keys(theme.typo),
      description: '텍스트 스타일을 지정합니다.',
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    typo: 'semibold01',
    children: '댕글 Daengle',
  },
};
