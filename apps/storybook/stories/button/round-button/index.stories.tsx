import type { Meta, StoryObj } from '@storybook/react';
import { RoundButton } from '@daengle/design-system';
import { css } from '@emotion/react';

const meta = {
  title: 'Components/Buttons/RoundButton',
  component: RoundButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'kakao'],
    },
    size: {
      control: 'radio',
      options: ['XS', 'S', 'M', 'L', 'XL'],
    },
    fullWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof RoundButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Daengle',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Daengle',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Daengle',
  },
};

export function Size() {
  return (
    <div css={wrapper}>
      <RoundButton size="XS">XS xsmall</RoundButton>
      <RoundButton size="S">S small</RoundButton>
      <RoundButton size="M">M medium</RoundButton>
      <RoundButton size="L">L large</RoundButton>
      <RoundButton size="XL">XL xlarge</RoundButton>
    </div>
  );
}

export function Variant() {
  return (
    <div css={wrapper}>
      <RoundButton variant="primary">Daengle</RoundButton>
      <RoundButton variant="kakao" size="L">
        카카오로 로그인하기
      </RoundButton>
    </div>
  );
}

const wrapper = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
