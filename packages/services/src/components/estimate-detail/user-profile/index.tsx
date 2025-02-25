import { Text } from '@daengle/design-system';
import { wrapper, image } from './index.styles';
import { DefaultProfile } from '@daengle/design-system/icons';
import { useState } from 'react';

interface Props {
  userImage?: string;
  userName?: string;
}

export function UserProfile({ userImage, userName }: Props): JSX.Element {
  const [isImageError, setIsImageError] = useState(false);

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setIsImageError(true);
  };
  return (
    <div css={wrapper}>
      {!isImageError && userImage ? (
        <img src={userImage} alt={`${userName} 프로필`} css={image} onError={handleImageError} />
      ) : (
        <DefaultProfile width={50} height={50} css={image} />
      )}
      <Text typo="body4" tag="p">
        {userName}
      </Text>
    </div>
  );
}
