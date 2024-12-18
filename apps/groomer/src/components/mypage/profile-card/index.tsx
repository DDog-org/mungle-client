import { DefaultProfile, Paw } from '@daengle/design-system/icons';
import { imageStyle, meterTag, profile, profileCard, tag, tags, paw } from './index.styles';
import { Text } from '@daengle/design-system';

export default function ProfileCard() {
  return (
    <div css={profileCard}>
      <DefaultProfile width={80} height={94} css={imageStyle} />
      <div css={profile}>
        <Text typo="subtitle3">김윤일 디자이너</Text>
        <div css={tags}>
          <Text typo="body2" color="red200" css={meterTag}>
            <Paw width={9} css={paw} />
            39m
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
