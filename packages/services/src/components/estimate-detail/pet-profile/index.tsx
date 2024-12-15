import { TextButton, Text } from '@daengle/design-system';
import { ButtonTextButtonArrow, DefaultProfile } from '@daengle/design-system/icons';
import {
  wrapper,
  profile,
  imageUrl,
  petName,
  detail,
  labelWrapper,
  valueWrapper,
} from './index.styles';

interface Props {
  image: string;
  name: string;
  attributes: (string | number | null)[];
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
          {LABELS.map((label, index) => (
            <Text typo="body9" color="gray500" key={`label-${index}`}>
              {label}
            </Text>
          ))}
          <TextButton icons={{ suffix: <ButtonTextButtonArrow width={'6px'} stroke="#BEBEBE" /> }}>
            <Text color="gray400" typo="body9">
              자세히보기
            </Text>
          </TextButton>
        </div>
        <div css={valueWrapper}>
          {attributes.map((attribute, index) => (
            <Text typo="body9" key={`value-${index}`}>
              {attribute}
            </Text>
          ))}
        </div>
      </div>
    </div>
  );
}
