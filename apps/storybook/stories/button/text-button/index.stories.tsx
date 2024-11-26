import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextButton } from '@daengle/design-system';
import { ButtonTextButtonArrow } from '@daengle/design-system/icons';

const meta = {
  title: 'Components/Buttons/TextButton',
  component: TextButton,
  tags: ['autodocs'],
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <Text color="gray500" typo="regular01">
        꼬꼬마 관리샵
      </Text>
    ),
    icons: {
      suffix: <ButtonTextButtonArrow width="6px" />,
    },
  },
};
