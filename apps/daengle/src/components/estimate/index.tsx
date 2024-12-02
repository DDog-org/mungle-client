import { Text } from '@daengle/design-system';
import Image from 'next/image';
import { selectItem } from './index.style';

type Props = {
  name: string;
  src: string;
};

export default function EstimateSelectComponent(props: Props) {
  return (
    <div css={selectItem}>
      <Text typo="body5" color="gray400">
        {props.name}
      </Text>
      <Image src={props.src} alt={props.name} width={129} height={107} />
    </div>
  );
}
