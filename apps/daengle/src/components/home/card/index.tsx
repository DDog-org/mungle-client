import { DefaultProfile } from '@daengle/design-system/icons';
import { Text } from '@daengle/design-system';

import Image from 'next/image';
import { addressStyle, imageStyle, textBox, wrapper } from './index.styles';

interface Props {
  image: string;
  name: string;
  address: string;
  schedule: string;
  onClick: () => void;
}

export function Card({ image, name, address, schedule, onClick }: Props) {
  return (
    <div css={wrapper} onClick={onClick}>
      {image === '' ? (
        <DefaultProfile width={80} height={94} css={imageStyle} />
      ) : (
        <Image src={image} alt="이미지" width={80} height={94} css={imageStyle} />
      )}

      <div css={textBox}>
        <Text typo="title2">{name}</Text>
        <Text typo="body9" color="gray500" css={addressStyle}>
          {address}
        </Text>
        <Text typo="body9" color="gray600">
          {schedule}
        </Text>
      </div>
    </div>
  );
}
