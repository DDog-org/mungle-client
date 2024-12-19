import { DefaultProfile, Paw } from '@daengle/design-system/icons';
import { imageStyle, meterTag, profile, profileCard, tag, tags, paw } from './index.styles';
import { Text } from '@daengle/design-system';
import Image from 'next/image';

interface Props {
  groomerName: string;
  groomerImage: string | null;
  badges: string[];
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
          {/** TODO: Badge로 변경 */}
          <Text typo="body12" color="blue200" css={tag}>
            #대형견
          </Text>
          <Text typo="body12" color="blue200" css={tag}>
            #노견
          </Text>
        </div>
      </div>
    </div>
  );
}
