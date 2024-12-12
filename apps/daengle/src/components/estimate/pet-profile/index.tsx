import { TextButton } from '@daengle/design-system';
import { wrapper, profileButton, selectedProfileButton, defaultImage } from './index.styles';
import { useState } from 'react';
import { DefaultProfile } from '@daengle/design-system/icons';
import { PetInfo } from '~/interfaces/estimate';

interface Props {
  petInfos: PetInfo[];
  selectedPetIndex: number;
  onSelectPet: (index: number) => void;
}

export function ProfileSelector({ petInfos, selectedPetIndex, onSelectPet }: Props): JSX.Element {
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div css={wrapper}>
      {petInfos.map((pet, index) => (
        <TextButton
          key={pet.petId}
          css={[profileButton, index === selectedPetIndex && selectedProfileButton]}
          onClick={() => onSelectPet(index)}
          icons={{
            prefix:
              !pet.imageURL || failedImages[index] ? (
                <DefaultProfile css={defaultImage} />
              ) : (
                <img
                  src={pet.imageURL}
                  alt={`${pet.name} 프로필`}
                  onError={() => handleImageError(index)}
                />
              ),
          }}
        >
          {pet.name}
        </TextButton>
      ))}
    </div>
  );
}
