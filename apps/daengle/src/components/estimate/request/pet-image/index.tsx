import { Text } from '@daengle/design-system';
import { wrapper, image, name } from './index.styles';
import Image from 'next/image';
import { DefaultProfile } from '@daengle/design-system/icons';

interface Props {
  petImage: string;
  petname: string;
}

export function PetImage({ petImage, petname }: Props) {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = '';
  };

  return (
    <div css={wrapper}>
      {petImage ? (
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
