import { Card } from '../card';
import { wrapper } from './index.styles';

interface Props {
  cards: any[];
}

export function CardList({ cards }: Props) {
  return (
    <div css={wrapper}>
      {cards.map((card) => (
        <Card />
      ))}
    </div>
  );
}
