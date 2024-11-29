import { Text } from '@daengle/design-system';
import { wrapper, zigzagContainer, zigzag, content, zigzagUpsideDown } from './index.styles';

interface Props {
  receipt: {
    id: number;
    daengleMeter: number;
    tags: string[];
    address: string;
    reservedDate: string;
    desiredStyle: string;
    overallOpinion: string;
  };
}

const Receipt = ({ receipt }: Props) => {
  return (
    <div css={wrapper}>
      <div css={zigzagContainer}>
        <div css={zigzag}></div>
      </div>
      <section css={content}>
        <Text typo="body4" color="gray400">
          지역
        </Text>
        <Text typo="subtitle3">{receipt.address}</Text>
      </section>

      <section css={content}>
        <Text typo="body4" color="gray400">
          일정
        </Text>
        <Text typo="subtitle3">{receipt.reservedDate}</Text>
      </section>

      <section css={content}>
        <Text typo="body4" color="gray400">
          서비스
        </Text>
        <Text typo="subtitle3">{receipt.desiredStyle}</Text>
      </section>

      <section css={content}>
        <Text typo="body4" color="gray400">
          추가 소견
        </Text>
        <Text typo="body4">{receipt.overallOpinion}</Text>
      </section>
      <div css={zigzagContainer}>
        <div css={zigzagUpsideDown}></div>
      </div>
    </div>
  );
};

export default Receipt;
