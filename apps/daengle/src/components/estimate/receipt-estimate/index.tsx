import { wrapper, zigzagContainer, zigzag, zigzagUpsideDown, space } from './index.styles';
import { Content } from '../receipt-content';

interface Props {
  items: {
    title: string;
    receipt: string;
    typo?: 'subtitle3' | 'body4';
    hasLine?: boolean;
    addTitle?: string;
  }[];
}

export const Receipt = ({ items }: Props) => {
  return (
    <div css={wrapper}>
      <div css={zigzagContainer}>
        <div css={zigzag} />
      </div>
      {items.map((item) => (
        <Content key={item.title} {...item} />
      ))}
      <div css={space} />
      <div css={zigzagContainer}>
        <div css={zigzagUpsideDown} />
      </div>
    </div>
  );
};
