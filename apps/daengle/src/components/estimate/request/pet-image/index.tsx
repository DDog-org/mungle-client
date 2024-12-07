import { Text } from '@daengle/design-system';
import { wrapper, image, name } from './index.styles';
import Image from 'next/image';

interface Props {
  petname: string;
}

export function PetImage({ petname }: Props) {
  return (
    <div css={wrapper}>
      <Image src="/test.jpg" width={86} height={86} alt="Picture of your pet" css={image} />
      <Text typo="body1" css={name}>
        {petname}
      </Text>
    </div>
  );
}
