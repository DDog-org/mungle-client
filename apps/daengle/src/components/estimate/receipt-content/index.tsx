import { Text } from '@daengle/design-system';
import { content } from './index.styles';

interface Props {
  title: string;
  receipt: string;
  typo?: 'subtitle3' | 'body4';
}

export const Content = ({ title, receipt, typo = 'subtitle3' }: Props) => {
  return (
    <section css={content}>
      <Text typo="body4" color="gray400">
        {title}
      </Text>
      <Text typo={typo}>{receipt}</Text>
    </section>
  );
};
