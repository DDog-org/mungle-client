import { Text } from '@daengle/design-system';
import Image from 'next/image';
import { selectItem } from './index.style';

interface Props {
  name: string;
  src: string;
  onClick: () => void;
  isSelected: boolean;
}

export default function EstimateSelectComponent({ isSelected, onClick, name, src }: Props) {
  return (
    <div onClick={onClick} css={selectItem(isSelected)}>
      <Text typo="body5" color={isSelected ? 'blue200' : 'gray400'}>
        {name}
      </Text>
      <Image src={src} alt={name} width={129} height={107} />
    </div>
  );
}
