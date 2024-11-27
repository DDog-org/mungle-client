import type { Meta, StoryObj } from '@storybook/react';
import { ChipToggleButton } from '@daengle/design-system';
import { css } from '@emotion/react';

const meta = {
  title: 'Components/Chips/ChipToggleButton',
  component: ChipToggleButton,
  tags: ['autodocs'],
} satisfies Meta<typeof ChipToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const ITEMS = ['없음', '눈', '코', '입', '귀', '목', '몸통', '다리', '꼬리', '생식기'];

export const Fixed = () => {
  return (
    <div css={wrapper}>
      {ITEMS.map((item) => (
        <ChipToggleButton key={item} size="fixed">
          {item}
        </ChipToggleButton>
      ))}
    </div>
  );
};

export const Fluid = () => {
  return (
    <div css={wrapper}>
      {ITEMS.map((item) => (
        <ChipToggleButton key={item} size="fluid">
          {item}
        </ChipToggleButton>
      ))}
    </div>
  );
};

export const Full = () => {
  return (
    <div css={wrapper}>
      {ITEMS.map((item) => (
        <ChipToggleButton key={item} size="full">
          {item}
        </ChipToggleButton>
      ))}
    </div>
  );
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Daengle',
  },
};

const wrapper = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
