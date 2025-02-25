import { Text } from '@daengle/design-system';
import { wrapper, image, name } from './index.styles';
import Image from 'next/image';
import { DefaultProfile } from '@daengle/design-system/icons';
import { useState } from 'react';

interface Props {
  petImage: string;
  petname: string;
}

export function PetImage({ petImage, petname }: Props) {
  const [isImageError, setIsImageError] = useState(false);

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setIsImageError(true);
  };

  return (
    <div css={wrapper}>
      {!isImageError && petImage ? (
        <img
          src={petImage}
          width={86}
          height={86}
          alt={`${petname} 프로필`}
          css={image}
          onError={handleImageError}
        />
      ) : (
        <DefaultProfile width={80} height={80} css={image} />
      )}

      <Text typo="body1" css={name}>
        {petname}
      </Text>
    </div>
  );
}
