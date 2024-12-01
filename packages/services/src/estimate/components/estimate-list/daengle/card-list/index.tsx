import { useRouter } from 'next/router';
import { Text, TextButton } from '@daengle/design-system';
import {
  listContainer,
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
import { CareEstimate, GroomingEstimate } from '@services/types/estimate';

type UserEstimateContent = GroomingEstimate | CareEstimate;

interface Props {
  estimateData: UserEstimateContent[];
}

export default function CardList({ estimateData }: Props): JSX.Element {
  const router = useRouter();

  return (
    <div css={listContainer}>
      {estimateData?.map((data) => (
        <div key={data.id} css={card}>
          <div css={contentContainer} onClick={() => router.push('/temporary-route')}>
            <div css={cardHeader}>
              <Text css={nameStyle} typo="subtitle3">
                {data.name}
              </Text>
              <div css={distanceStyle(data.daengleMeter)}>🐾 {data.daengleMeter}m</div>
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
