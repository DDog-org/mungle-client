import { Text } from '@daengle/design-system';
import { wrapper, line, subtitle } from './index.styles';

interface Props {
  title: string;
  receipt: string;
  typo?: 'subtitle3' | 'body4';
  hasLine?: boolean;
  addTitle?: string;
}

export const Content = ({
  title,
  receipt,
  typo = 'subtitle3',
  hasLine = false,
  addTitle,
}: Props) => {
  return (
    <section css={wrapper}>
      <Text typo="body4" color="gray400">
        {title}
      </Text>
      <Text typo={typo}>{receipt}</Text>
      {hasLine && (
        <>
          <div css={line}></div>
          {addTitle && (
            <Text css={subtitle} typo="subtitle3" color="gray400">
              {addTitle}
            </Text>
          )}
        </>
      )}
    </section>
  );
};
