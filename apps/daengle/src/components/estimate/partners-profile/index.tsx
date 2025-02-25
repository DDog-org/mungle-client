import { Text, TextButton } from '@daengle/design-system';
import { ButtonTextButtonArrow, DefaultProfile } from '@daengle/design-system/icons';
import { wrapper, profileImage, details, tags, tag } from './index.styles';
import { useState } from 'react';

interface Props {
  profile: {
    id: number;
    name: string;
    shopName?: string | null;
    image: string;
    daengleMeter: number;
    tags?: string[];
  };
  onClick?: () => void;
}

export const PartnersInfo = ({ profile, onClick }: Props) => {
  const [isImageError, setIsImageError] = useState(false);

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setIsImageError(true);
  };

  return (
    <div css={wrapper}>
      {!isImageError && profile.image ? (
        <img
          src={profile.image}
          width={112}
          height={112}
          alt={`${profile.name} 프로필`}
          css={profileImage}
          onError={handleImageError}
        />
      ) : (
        <DefaultProfile width={112} height={112} css={profileImage} />
      )}
      <div css={details}>
        <Text typo="title2">{profile.name}</Text>

        {profile.shopName && (
          <TextButton icons={{ suffix: <ButtonTextButtonArrow width={'6px'} /> }} onClick={onClick}>
            <Text color="gray500" typo="body8">
              {profile.shopName}
            </Text>
          </TextButton>
        )}

        <div css={tags}>
          {profile?.tags?.map((hashtag) => (
            <Text color="blue200" typo="body12" key={hashtag} css={tag}>
              #{hashtag}
            </Text>
          ))}
        </div>
      </div>
    </div>
  );
};
