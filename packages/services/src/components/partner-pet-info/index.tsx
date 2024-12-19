import {
  ChipRadio,
  ChipToggleButton,
  Input,
  Select,
  Text,
  TextField,
} from '@daengle/design-system';

import {
  chipButtonBox,
  defaultProfile,
  divider,
  formBox,
  infoCard,
  inputWrapper,
  petProfile,
  profileImage,
  profileWrapper,
  section,
  selectChipButtonBox,
  toggleButtonBox,
} from './index.styles';
import {
  PET_DISLIKEPART,
  PET_EXPERIENCE,
  PET_GENDER,
  PET_IS_NEUTERED,
  PET_SIGNIFICANTTAG,
} from '../../constants/pet';
import { Breed } from '../../interface/pet';
import { PET_SIZE } from '../../constants';

interface Props {
  petInfo: PetInfo;
  breeds: Breed[];
}

interface PetInfo {
  petId: number;
  image: string;
  name: string;
  birth: string;
  gender: string;
  breed: string;
  isNeutered: boolean;
  weight: keyof typeof PET_SIZE;
  groomingExperience: true;
  isBite: boolean;
  dislikeParts: string[];
  significantTags: string[];
  significant: string;
}

export function PetProfileDetail({ petInfo, breeds }: Props) {
  return (
    <div>
      <div css={profileWrapper}>
        <section css={section}>
          <Text tag="h2" typo="subtitle3">
            아이 프로필
          </Text>
          <div css={petProfile}>
            {petInfo.image ? (
              <img
                src={petInfo.image}
                alt="반려견 프로필"
                width={86}
                height={86}
                css={profileImage}
              />
            ) : (
              <div css={defaultProfile}>No Image</div>
            )}
            <Text typo="body1" color="green200">
              {petInfo.name}
            </Text>
          </div>
        </section>
      </div>
      <div css={divider} />
      <section css={inputWrapper}>
        <Input label="이름" readOnly value={petInfo.name} />
        <section css={formBox}>
          <div css={infoCard}>
            <Text typo="subtitle3" color="black">
              탄생년도
            </Text>
            <Select options={[]} placeholder="탄생년도" value={petInfo.birth} />
          </div>
          <div css={infoCard}>
            <Text typo="subtitle3">성별</Text>
            <section css={toggleButtonBox}>
              {PET_GENDER.map((gender) => (
                <ChipRadio
                  key={gender.value}
                  value={gender.value}
                  label={gender.label}
                  size="full"
                  service="partner"
                  isSelected={petInfo.gender === gender.value}
                />
              ))}
            </section>
          </div>
          <div css={infoCard}>
            <Text typo="subtitle3">중성화</Text>
            <section css={toggleButtonBox}>
              {PET_IS_NEUTERED.map((item) => (
                <ChipRadio
                  key={item.label}
                  value={item.value}
                  label={item.label}
                  size="full"
                  service="partner"
                  isSelected={String(petInfo.isNeutered) === item.value}
                />
              ))}
            </section>
          </div>
          <div css={infoCard}>
            <Text typo="subtitle3" color="black">
              품종
            </Text>
            <Select
              options={breeds.map((breed) => ({
                value: breed.breed,
                label: breed.breedName,
              }))}
              value={petInfo.breed}
            />
          </div>
          <div css={infoCard}>
            <Text typo="subtitle3">미용 경험</Text>
            <section css={toggleButtonBox}>
              {PET_EXPERIENCE.map((item) => (
                <ChipRadio
                  key={item.label}
                  value={item.value}
                  label={item.label}
                  size="full"
                  service="partner"
                  isSelected={String(petInfo.groomingExperience) === item.value}
                />
              ))}
            </section>
          </div>
          <div css={infoCard}>
            <Text typo="subtitle3">입질</Text>
            <section css={toggleButtonBox}>
              {PET_EXPERIENCE.map((item) => (
                <ChipRadio
                  key={item.label}
                  value={item.value}
                  label={item.label}
                  size="full"
                  service="partner"
                  isSelected={String(petInfo.isBite) === item.value}
                />
              ))}
            </section>
          </div>
          <div css={infoCard}>
            <Text typo="subtitle3">싫어하는 부위</Text>
            <section css={selectChipButtonBox}>
              {PET_DISLIKEPART.map((item) => {
                const isSelected = petInfo.dislikeParts.includes(item.value);
                return (
                  <ChipToggleButton
                    key={item.value}
                    size="fixed"
                    isSelected={isSelected}
                    service="partner"
                  >
                    {item.label}
                  </ChipToggleButton>
                );
              })}
            </section>
          </div>
          <div css={infoCard}>
            <Text typo="subtitle3">특이사항</Text>
            <section css={chipButtonBox}>
              {PET_SIGNIFICANTTAG.map((item) => {
                const isSelected = petInfo.significantTags.includes(item.value);
                return (
                  <ChipToggleButton
                    key={item.value}
                    size="full"
                    isSelected={isSelected}
                    service="partner"
                  >
                    {item.label}
                  </ChipToggleButton>
                );
              })}
            </section>
            <TextField readOnly value={petInfo.significant || '별도 특이사항 없음'} />
          </div>
        </section>
      </section>
    </div>
  );
}
