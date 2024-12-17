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

interface Props {
  image?: string;
  name?: string;
  attributes: {
    age: number;
    weight: keyof typeof PET_SIZE;
    significant: string;
  };
}

const LABELS = ['나이', '몸무게', '특이사항'];

export function PetDetails({ image, name, attributes }: Props): JSX.Element {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = '';
  };

  return (
    <div css={wrapper}>
      <div css={profile}>
        {image ? (
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

          <TextButton icons={{ suffix: <ButtonTextButtonArrow width={5} /> }}>
            <Text color="gray500" typo="body10">
              자세히 보기
            </Text>
          </TextButton>
        </div>
        <div css={valueWrapper}>
          <Text typo="body9">{attributes.age}</Text>
          <Text typo="body9">{PET_SIZE[attributes.weight]}</Text>
          <Text typo="body9">{attributes.significant}</Text>
        </div>
      </div>
    </div>
  );
}
