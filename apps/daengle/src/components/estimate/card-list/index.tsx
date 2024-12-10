import { Text, TextButton } from '@daengle/design-system';
import {
  wrapper,
  card,
  contentContainer,
  cardHeader,
  cardContent,
  profileImage,
  nameStyle,
  distanceStyle,
  tagsContainer,
  tagButtonStyle,
} from './index.styles';
import { DefaultProfile } from '@daengle/design-system/icons';

interface GroomingEstimate {
  id: number;
  image: string;
  name: string;
  daengleMeter: number;
  shopName?: string | null;
  reservedDate: string;
  tags?: string[];
}

interface CareEstimate {
  id: number;
  image: string;
  name: string;
  daengleMeter: number;
  shopName?: string | null;
  reservedDate: string;
  tags?: string[];
}

type UserEstimateContent = GroomingEstimate | CareEstimate;

interface Props {
  estimateData: UserEstimateContent[];
  isDesignation: boolean;
  onCardClick?: (id: number) => void;
}

export function CardList({ estimateData, isDesignation, onCardClick }: Props): JSX.Element {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = '';
  };

  return (
    <div css={wrapper}>
      {estimateData?.map((data) => (
        <div key={data.id} css={card}>
          <div css={contentContainer} onClick={() => onCardClick?.(data.id)}>
            <div css={cardHeader}>
              <Text css={nameStyle} typo="subtitle3">
                {data.name}
              </Text>
              <div css={distanceStyle(data.daengleMeter)}>
                {/* 상태 확인 데이터 추후 필요한 부분 */}
                {isDesignation ? `진행 중` : `🐾 ${data.daengleMeter}m`}
              </div>
            </div>
            <div css={cardContent}>
              <Text typo="body11" color="gray400">
                {data.shopName || ''}
              </Text>
              <Text typo="body12" color="gray600">
                {data.reservedDate}
              </Text>
              <div css={tagsContainer}>
                {data.tags?.map((tag, index) => (
                  <TextButton
                    key={`${data.id}-${index}`}
                    css={tagButtonStyle}
                    onClick={() => onCardClick?.(data.id)}
                  >
                    #{tag}
                  </TextButton>
                ))}
              </div>
            </div>
          </div>
          {data.image ? (
            <img
              src={data.image}
              alt={`${data.name} 프로필`}
              css={profileImage}
              onClick={() => onCardClick?.(data.id)}
              onError={handleImageError}
            />
          ) : (
            <DefaultProfile css={profileImage} onClick={() => onCardClick?.(data.id)} />
          )}
        </div>
      ))}
    </div>
  );
}
