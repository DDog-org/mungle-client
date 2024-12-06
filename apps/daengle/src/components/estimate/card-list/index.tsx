import { useRouter } from 'next/router';
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

interface UserEstimateContent {
  id: number;
  image: string;
  name: string;
  daengleMeter: number;
  shopName?: string | null;
  reservedDate: string;
  tags?: string[];
}

interface Props {
  estimateData: UserEstimateContent[];
  isDesignation: boolean;
}

export function CardList({ estimateData, isDesignation }: Props): JSX.Element {
  const router = useRouter();

  return (
    <div css={wrapper}>
      {estimateData?.map((data) => (
        <div key={data.id} css={card}>
          <div css={contentContainer} onClick={() => router.push('/temporary-route')}>
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
                    onClick={() => router.push('/temporary-route')}
                  >
                    #{tag}
                  </TextButton>
                ))}
              </div>
            </div>
          </div>
          <img
            src={data.image}
            alt={`${data.name} 프로필`}
            css={profileImage}
            onClick={() => router.push('/temporary-route')}
          />
        </div>
      ))}
    </div>
  );
}
