import { DefaultProfile, Paw } from '@daengle/design-system/icons';
import { imageStyle, meterTag, profile, profileCard, tag, tags, paw } from './index.styles';
import { Text } from '@daengle/design-system';

interface Props {
  onClick: () => void;
}

export default function ProfileCard({ onClick }: Props) {
  return (
    <div css={profileCard} onClick={onClick}>
      <DefaultProfile width={80} height={94} css={imageStyle} />
      <div css={profile}>
        <Text typo="subtitle3">문소연 디자이너</Text>
        <div css={tags}>
          <Text typo="body2" color="red200" css={meterTag}>
            <Paw width={9} css={paw} />
            43m
          </Text>
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
