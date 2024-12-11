import { Text, TextButton } from '@daengle/design-system';
import { ButtonTextButtonArrow, DefaultProfile } from '@daengle/design-system/icons';
import { wrapper, profileImage, details, tags, tag } from './index.styles';

interface Props {
  profile: {
    id: number;
    name: string;
    shopName?: string | null;
    image: string;
    daengleMeter: number;
    tags?: string[];
  };
}

export const PartnersInfo = ({ profile }: Props) => {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = '';
  };

  return (
    <div css={wrapper}>
      {profile.image ? (
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
        <TextButton icons={{ suffix: <ButtonTextButtonArrow width={'6px'} /> }}>
          <Text color="gray500" typo="body8">
            {profile.shopName}
          </Text>
        </TextButton>
        <div css={tags}>
          {profile?.tags?.map((hashtag, index) => (
            <Text color="blue200" typo="body12" key={`${profile.id}-${index}`} css={tag}>
              #{hashtag}
            </Text>
          ))}
        </div>
      </div>
    </div>
  );
};
