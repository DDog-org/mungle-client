import React from 'react';
import { css } from '@emotion/react';
import type { Meta } from '@storybook/react';
import { Layout } from '@daengle/design-system';

const meta = {
  title: 'Components/Layout',
  component: Layout,
  tags: ['autodocs'],
} satisfies Meta<typeof Layout>;

export default meta;

export function Mobile() {
  return (
    <Layout>
      <div css={contents}>Daengle</div>
    </Layout>
  );
}

const contents = css`
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
`;
