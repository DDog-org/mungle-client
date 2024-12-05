import React from 'react';
import { Text } from '@daengle/design-system';
import { wrapper, content } from './index.styles';

interface Props {
  title: string;
  children: React.ReactNode;
}

export function Section({ title, children }: Props): JSX.Element {
  return (
    <section css={wrapper}>
      <Text typo="body4" color="gray400">
        {title}
      </Text>
      <div css={content}>{children}</div>
    </section>
  );
}
