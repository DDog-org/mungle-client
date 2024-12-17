import { DefaultProfile } from '@daengle/design-system/icons';
import { Tag, Text } from '@daengle/design-system';

import Image from 'next/image';
import {
  imageStyle,
  textBox,
  wrapper,
  profileWrapper,
  DetailsWrapper,
  opacity,
  tags,
} from './index.styles';

interface Props {
  image: string;
  name: string;
  tag: string[];
  onClick: () => void;
}

export function Item({ image, name = '윤일', tag, onClick }: Props) {
  return (
    <div css={wrapper} onClick={onClick}>
      {image === '' ? (
        <>
          <DefaultProfile width={170} height={200} css={imageStyle} />
          <div css={DetailsWrapper}>
            <Text typo="subtitle1" color="white">
              {name}
            </Text>
            <div css={tags}>
              {tag.map((hashTag, index) => (
                <Tag key={index} service="search" variant="search">
                  #{hashTag}
                </Tag>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div css={profileWrapper}>
            <div css={opacity} />
            <Image src={image} alt="이미지" width={170} height={200} css={imageStyle} />
            <div css={DetailsWrapper}>
              <Text typo="subtitle1" color="white">
                {name}
              </Text>
              <div css={tags}>
                {tag.map((hashTag, index) => (
                  <Tag key={index} service="search" variant="search">
                    #{hashTag}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
