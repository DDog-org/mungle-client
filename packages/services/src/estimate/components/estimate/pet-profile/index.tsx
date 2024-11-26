import {
  wrapper,
  profile,
  imageUrl,
  petName,
  detail,
  labelWrapper,
  valueWrapper,
  label,
  value,
  detailButton,
} from './index.styles';

interface Props {
  image: string;
  name: string;
  attributes: { label: string; value: string }[];
}

const PetDetails = ({ image, name, attributes }: Props) => {
  return (
    <div css={wrapper}>
      <div css={profile}>
        <img src={image} alt={`${name} 프로필`} css={imageUrl} />
        <div css={petName}>{name}</div>
      </div>
      <div css={detail}>
        <div css={labelWrapper}>
          {/* api 연동 시 key 값 변경 */}
          {attributes.map((attribute, index) => (
            <div css={label} key={`label-${index}`}>
              {attribute.label}
            </div>
          ))}
          <div css={detailButton}>자세히보기 {'>'}</div>
        </div>
        <div css={valueWrapper}>
          {/* api 연동 시 key 값 변경 */}
          {attributes.map((attribute, index) => (
            <div css={value} key={`value-${index}`}>
              {attribute.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
