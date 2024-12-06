import { Text } from '@daengle/design-system';
import Image from 'next/image';
import { selectItem } from './index.style';

type Props = {
  name: string;
  src: string;
  onClick: () => void;
  isSelected: boolean;
};

export default function EstimateSelectComponent(props: Props) {
  return (
    <div onClick={props.onClick} css={selectItem(props.isSelected)}>
      <Text typo="body5" color={props.isSelected ? 'blue200' : 'gray400'}>
        {props.name}
      </Text>
      <Image src={props.src} alt={props.name} width={129} height={107} />
    </div>
  );
}
