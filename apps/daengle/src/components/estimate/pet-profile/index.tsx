import { TextButton } from '@daengle/design-system';
import { wrapper, profileButton, selectedProfileButton, defaultImage } from './index.styles';
import { useState } from 'react';
import { DefaultProfile } from '@daengle/design-system/icons';
import { PetInfo } from '~/interfaces/estimate';

interface Props {
  petInfos: PetInfo[];
  selectedPetId: number | null;
  onSelectPet: (petId: number) => void;
}

export function ProfileSelector({ petInfos, selectedPetId, onSelectPet }: Props) {
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div css={wrapper}>
      {petInfos.map((pet) => (
        <TextButton
          key={pet.petId}
          css={[profileButton, pet.petId === selectedPetId && selectedProfileButton]}
          onClick={() => onSelectPet(pet.petId)}
          icons={{
            prefix:
              !pet.imageUrl || failedImages[pet.petId] ? (
                <DefaultProfile css={defaultImage} />
              ) : (
                <img
                  src={pet.imageUrl}
                  alt={`${pet.name} 프로필`}
                  onError={() => handleImageError(pet.petId)}
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
