import { TextButton } from '@daengle/design-system';
import { profileContainer, profileButton, selectedProfileButton } from './index.styles';
import { PetInfo } from '@services/types/estimate';

interface Props {
  petInfos: PetInfo[];
  selectedPetIndex: number;
  onSelectPet: (index: number) => void;
}

export default function ProfileSelector({
  petInfos,
  selectedPetIndex,
  onSelectPet,
}: Props): JSX.Element {
  return (
    <div css={profileContainer}>
      {petInfos.map((pet, index) => (
        <TextButton
          key={pet.id ?? `pet-${index}`}
          css={[profileButton, index === selectedPetIndex && selectedProfileButton]}
          onClick={() => onSelectPet(index)}
          icons={{
            prefix: pet.image ? <img src={pet.image} alt={`${pet.name} 프로필`} /> : null,
          }}
        >
          {pet.name}
        </TextButton>
      ))}
    </div>
  );
}
