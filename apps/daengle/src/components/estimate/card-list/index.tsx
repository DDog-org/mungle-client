import { Text, TextButton } from '@daengle/design-system';
import { EmptyState } from '@daengle/services/components'; // EmptyState import
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
import { UserEstimateGeneralGroomingType } from '~/interfaces/estimate';

interface Props {
  mode: 'general' | 'designation';
  category: 'groomer' | 'vet';
  estimateData: UserEstimateGeneralGroomingType[];
  onCardClick?: (id: number) => void;
}

export function CardList({ mode, category, estimateData, onCardClick }: Props): JSX.Element {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = '';
  };

  if (estimateData.length === 0) {
    return <EmptyState isEmptyEstimates={false} hasOptions={true} />;
  }

  const isDesignation = mode === 'designation';

  return (
    <div css={wrapper}>
      {estimateData.map((item) => (
        <div key={item.id} css={card}>
          <div css={contentContainer} onClick={() => onCardClick?.(item.id)}>
            <div css={cardHeader}>
              <Text css={nameStyle} typo="subtitle3">
                {item.name}
              </Text>
              <div css={distanceStyle(item.daengleMeter)}>
                {isDesignation ? '진행 중' : `🐾 ${item.daengleMeter}m`}
              </div>
            </div>
            <div css={cardContent}>
              <Text typo="body11" color="gray400">
                {item.shopName || (category === 'vet' ? '' : '미용실 정보 없음')}
              </Text>
              <Text typo="body12" color="gray600">
                {item.reservedDate}
              </Text>
              <div css={tagsContainer}>
                {item.keywords?.map((keyword, index) => (
                  <TextButton
                    key={`${item.id}-${index}`}
                    css={tagButtonStyle}
                    onClick={() => onCardClick?.(item.id)}
                  >
                    #{keyword}
                  </TextButton>
                ))}
              </div>
            </div>
          </div>
          {item.imageUrl ? (
            <img
              src={item.imageUrl}
              alt={`${item.name} 프로필`}
              css={profileImage}
              onClick={() => onCardClick?.(item.id)}
              onError={handleImageError}
            />
          ) : (
            <DefaultProfile css={profileImage} onClick={() => onCardClick?.(item.id)} />
          )}
        </div>
      ))}
    </div>
  );
}
