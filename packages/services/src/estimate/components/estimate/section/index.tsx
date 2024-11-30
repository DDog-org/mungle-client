import React from 'react';
import { Text } from '@daengle/design-system';
import { wrapper, content } from './index.styles';

interface Props {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: Props) => {
  return (
    <section css={wrapper}>
      <Text typo="body4" color="gray400">
        {title}
      </Text>
      <div css={content}>{children}</div>
    </section>
  );
};

export default Section;
