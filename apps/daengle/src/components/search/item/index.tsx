import { DefaultProfile } from '@daengle/design-system/icons';
import { Dim, Tag, Text } from '@daengle/design-system';

import Image from 'next/image';
import { wrapper, profileWrapper, DetailsWrapper, tags } from './index.styles';

interface Props {
  partnerId: number;
  partnerImage: string;
  partnerName: string;
  badges: string[];
  onClick: (partnerId: number) => void;
}

export function Item({ partnerId, partnerImage, partnerName, badges, onClick }: Props) {
  return (
    <div css={wrapper} onClick={() => onClick(partnerId)}>
      {!partnerImage ? (
        <div css={profileWrapper}>
          <DefaultProfile />
          <div css={DetailsWrapper}>
            <Text typo="subtitle1" color="white">
              {partnerName}
            </Text>
            <div css={tags}>
              {badges?.map((hashTag) => (
                <Tag key={hashTag} service="search" variant="line">
                  #{hashTag}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div css={profileWrapper}>
          <Image src={partnerImage} alt="프로필 이미지" width={170} height={200} />
          <Dim />

          <div css={DetailsWrapper}>
            <Text typo="subtitle1" color="white">
              {partnerName}
            </Text>
            <div css={tags}>
              {badges.map((hashTag) => (
                <Tag key={hashTag} service="search" variant="line">
                  #{hashTag}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
