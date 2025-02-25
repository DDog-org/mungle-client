import Image from 'next/image';
import { Text } from '@daengle/design-system';
import { DefaultImage, MypageAddButton } from '@daengle/design-system/icons';
import { PetInfoForm } from '~/interfaces';
import {
  addButton,
  petItemStyle,
  petName,
  petProfileWrapper,
  petProfileAdd,
  wrapper,
} from './index.styles';

interface Props {
  petInfos: PetInfoForm[];
  selectedPetId: number;
  onClickPet?: (petId: number) => void;
  onPetSelect: (petId: number) => void;
  onPetCreateClick?: () => void;
}

export function SelectPet({
  petInfos,
  onPetSelect,
  onClickPet,
  selectedPetId,
  onPetCreateClick,
}: Props) {
  return (
    <div css={wrapper}>
      {petInfos.map((pet) => (
        <div
          key={pet.petId}
          css={[petProfileWrapper, petItemStyle({ isSelected: selectedPetId === pet.petId })]}
          onClick={() => {
            onClickPet?.(pet.petId);
            onPetSelect(pet.petId);
          }}
        >
          {pet.petImage ? (
            <Image src={pet.petImage} alt="반려견 프로필" width={59} height={59} />
          ) : (
            <DefaultImage width={59} height={59} />
          )}

          <Text
            typo="body1"
            css={petName}
            color={selectedPetId === pet.petId ? 'blue200' : 'gray600'}
          >
            {pet.petName}
          </Text>
        </div>
      ))}

      {onPetCreateClick && (
        <div css={petProfileAdd} onClick={onPetCreateClick}>
          <div css={addButton}>
            <MypageAddButton width={59} />
          </div>
          <Text typo="body1" color="gray400" css={petName}>
            추가
          </Text>
        </div>
      )}
    </div>
  );
}
