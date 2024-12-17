import { DefaultProfile } from '@daengle/design-system/icons';
import { Text } from '@daengle/design-system';

import Image from 'next/image';
import { addressStyle, imageStyle, textBox, wrapper } from './index.styles';

interface Props {
  image: string;
  name: string;
  address: string;
  onClick: () => void;
}

export function Item({ image, name, address, onClick }: Props) {
  return (
    <div css={wrapper} onClick={onClick}>
      {image === '' ? (
        <>
          <DefaultProfile width={101} height={117} css={imageStyle} />
          <div css={textBox}>
            <Text typo="title2">{name}</Text>
            <Text typo="body9" color="gray400" css={addressStyle}>
              {address}
            </Text>
          </div>
        </>
      ) : (
        <>
          <Image src={image} alt="이미지" width={101} height={117} css={imageStyle} />
          <div css={textBox}>
            <Text typo="title2">{name}</Text>
            <Text typo="body9" color="gray400" css={addressStyle}>
              {address}
            </Text>
          </div>
        </>
      )}
    </div>
  );
}
