import { TextButton, Text } from '@daengle/design-system';
import { ButtonTextButtonArrow, DefaultProfile } from '@daengle/design-system/icons';
import { PET_SIZE } from '../../../constants';
import {
  wrapper,
  profile,
  imageUrl,
  petName,
  detail,
  labelWrapper,
  valueWrapper,
  labelItems,
} from './index.styles';
import { useState } from 'react';

interface Props {
  image?: string;
  name?: string;
  attributes: {
    age: number;
    weight: keyof typeof PET_SIZE;
    significant: string[] | string;
  };
  onClick?: () => void;
}

const LABELS = ['나이', '몸무게', '특이사항'];

export function PetDetails({ image, name, attributes, onClick }: Props): JSX.Element {
  const [isImageError, setIsImageError] = useState(false);

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setIsImageError(true);
  };

  return (
    <div css={wrapper}>
      <div css={profile} onClick={onClick}>
        {!isImageError && image ? (
          <img src={image} alt={`${name} 프로필`} css={imageUrl} onError={handleImageError} />
        ) : (
          <DefaultProfile width={80} height={80} css={imageUrl} />
        )}
        <Text typo="subtitle3" css={petName}>
          {name}
        </Text>
      </div>
      <div css={detail}>
        <div css={labelWrapper}>
          <div css={labelItems}>
            {LABELS.map((label) => (
              <Text typo="body9" color="gray700" key={label}>
                {label}
              </Text>
            ))}
          </div>

          <TextButton onClick={onClick} icons={{ suffix: <ButtonTextButtonArrow width={5} /> }}>
            <Text color="gray500" typo="body10">
              자세히 보기
            </Text>
          </TextButton>
        </div>
        <div css={valueWrapper}>
          <Text typo="body9">{attributes.age}</Text>
          <Text typo="body9">{PET_SIZE[attributes.weight]}</Text>
          <Text typo="body9">
            {Array.isArray(attributes.significant)
              ? attributes.significant.join(', ') // 배열일 경우
              : attributes.significant}
          </Text>
        </div>
      </div>
    </div>
  );
}
