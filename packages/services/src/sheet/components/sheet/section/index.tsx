import React from 'react';
import { wrapper, sectionTitle, content } from './index.styles';

interface Props {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: Props) => {
  return (
    <section css={wrapper}>
      <div css={sectionTitle}>{title}</div>
      <div css={content}>{children}</div>
    </section>
  );
};

export default Section;
