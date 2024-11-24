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
    },
    typo: {
      control: 'select',
      options: Object.keys(theme.typo),
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
