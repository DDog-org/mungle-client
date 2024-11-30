import { TextButton } from '@daengle/design-system';
import { profileContainer, profileButton, selectedProfileButton } from './index.styles';

interface PetInfo {
  petId: number | null;
  petName: string;
  petImage: string;
}

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
          key={pet.petId}
          css={[profileButton, index === selectedPetIndex && selectedProfileButton]}
          onClick={() => onSelectPet(index)}
          icons={{
            prefix: pet.petImage ? <img src={pet.petImage} alt={`${pet.petName} 프로필`} /> : null,
          }}
        >
          {pet.petName}
        </TextButton>
      ))}
    </div>
  );
}
