import { DefaultProfile, Paw } from '@daengle/design-system/icons';
import { imageStyle, meterTag, profile, profileCard, tag, tags, paw } from './index.styles';
import { Text } from '@daengle/design-system';
import Image from 'next/image';
import { GROOMER_BADGES } from '~/constants';

interface Props {
  groomerName: string;
  groomerImage: string | null;
  badges: (keyof typeof GROOMER_BADGES)[];
  daengleMeter: number;
  onClick: () => void;
}

export default function ProfileCard({
  groomerName,
  groomerImage,
  badges,
  daengleMeter,
  onClick,
}: Props) {
  return (
    <div css={profileCard} onClick={onClick}>
      {!groomerImage ? (
        <DefaultProfile width={80} height={94} css={imageStyle} />
      ) : (
        <Image src={groomerImage} alt="이미지" width={80} height={94} css={imageStyle} />
      )}
      <div css={profile}>
        <Text typo="subtitle3">{groomerName}</Text>
        <div css={tags}>
          <Text typo="body2" color="red200" css={meterTag}>
            <Paw width={9} css={paw} />
            {daengleMeter}m
          </Text>
          {badges.map((badge) => (
            <Text typo="body12" color="blue200" css={tag}>
              #{GROOMER_BADGES[badge]}
            </Text>
          ))}
        </div>
      </div>
    </div>
  );
}
