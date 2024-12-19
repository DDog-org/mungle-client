import Image from 'next/image';
import { DefaultImage, MypageAddButton } from '@daengle/design-system/icons';
import { PetInfoForm } from '~/interfaces';
import {
  addButton,
  petItemStyle,
  petName,
  petProfileWrapper,
  petProfileAdd,
  profileImage,
  wrapper,
} from './index.styles';
import { Text } from '@daengle/design-system';

interface Props {
  petInfos: PetInfoForm[];
  selectedPetId: number;
  handlePetSelect: (petId: number) => void;
  handlePetCreateClick: () => void;
}

export function SelectPet({
  petInfos,
  handlePetSelect,
  selectedPetId,
  handlePetCreateClick,
}: Props) {
  return (
    <>
      <div css={wrapper}>
        {petInfos.map((pet) => (
          <div
            key={pet.petId}
            css={[petProfileWrapper, petItemStyle({ isSelected: selectedPetId === pet.petId })]}
            onClick={() => handlePetSelect(pet.petId)}
          >
            {pet.petImage ? (
              <Image
                src={pet.petImage}
                alt="반려견 프로필"
                width={86}
                height={86}
                css={profileImage}
              />
            ) : (
              <DefaultImage css={profileImage} />
            )}
            <Text typo="body1" css={petName} color="black100">
              {pet.petName}
            </Text>
          </div>
        ))}
        <div css={petProfileAdd} onClick={handlePetCreateClick}>
          <div css={addButton}>
            <MypageAddButton width={59} />
          </div>
          <Text typo="body1" color="gray400" css={petName}>
            추가
          </Text>
        </div>
      </div>
    </>
  );
}
