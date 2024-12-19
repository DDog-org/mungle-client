import { Empty, Text, TextButton } from '@daengle/design-system';
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
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

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

  const isDesignation = mode === 'designation';

  return (
    <div css={wrapper}>
      {estimateData.length ? (
        estimateData?.map((item) => (
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
              <div css={cardContent} onClick={() => onCardClick?.(item.id)}>
                <Text typo="body11" color="gray400">
                  {item.shopName || (category === 'vet' ? '' : '미용실 정보 없음')}
                </Text>
                <Text typo="body12" color="gray600">
                  {dayjs(item.reservedDate).locale('ko').format('YYYY.MM.DD(ddd) • HH:mm')}
                </Text>
                <div css={tagsContainer}>
                  {item.keywords?.map((keyword) => (
                    <TextButton key={item.id} css={tagButtonStyle}>
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
                onError={handleImageError}
                onClick={() => onCardClick?.(item.id)}
              />
            ) : (
              <DefaultProfile css={profileImage} />
            )}
          </div>
        ))
      ) : (
        <>
          {/* TODO: 문구 변경 */}
          <Empty title="견적서가 존재하지 않아요" />
        </>
      )}
    </div>
  );
}
