import { TextButton } from '@daengle/design-system';
import { wrapper, profileButton, selectedProfileButton } from './index.styles';

interface PetInfo {
  petId: number;
  name: string;
  image: string;
}

interface Props {
  petInfos: PetInfo[];
  selectedPetIndex: number;
  onSelectPet: (index: number) => void;
}

export function ProfileSelector({ petInfos, selectedPetIndex, onSelectPet }: Props): JSX.Element {
  return (
    <div css={wrapper}>
      {petInfos.map((pet, index) => (
        <TextButton
          key={pet.petId}
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
