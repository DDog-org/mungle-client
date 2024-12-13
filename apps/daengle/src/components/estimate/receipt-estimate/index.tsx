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
        <div css={zigzag}></div>
      </div>
      {items.map((item, index) => (
        <Content key={index} {...item} />
      ))}
      <div css={space}></div>
      <div css={zigzagContainer}>
        <div css={zigzagUpsideDown}></div>
      </div>
    </div>
  );
};
