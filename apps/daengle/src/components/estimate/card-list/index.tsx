import { DefaultProfile } from '@daengle/design-system/icons';
import { Text, TextButton } from '@daengle/design-system';
import {
  wrapper,
  contentContainer,
  cardHeader,
  cardContent,
  profileImage,
  nameStyle,
  distanceStyle,
  tagsContainer,
  tagButtonStyle,
} from './index.styles';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import Image from 'next/image';

interface Props {
  mode: 'general' | 'designation';
  estimateId: number;
  partnerName: string;
  daengleMeter: number;
  name: string;
  reservedDate: string;
  badges: string[];
  imageUrl?: string;
  onCardClick?: (id: number) => void;
}

export function CardList({
  mode,
  estimateId,
  partnerName,
  daengleMeter,
  name,
  reservedDate,
  badges,
  imageUrl,
  onCardClick,
}: Props) {
  const isDesignation = mode === 'designation';

  return (
    <div css={wrapper} onClick={() => onCardClick?.(estimateId)}>
      <div css={contentContainer}>
        <div css={cardHeader}>
          <Text css={nameStyle} typo="subtitle3">
            {partnerName}
          </Text>
          <div css={distanceStyle(daengleMeter)}>
            {isDesignation ? '진행 중' : `🐾 ${daengleMeter}m`}
          </div>
        </div>

        <div css={cardContent}>
          <Text typo="body11" color="gray400">
            {name}
          </Text>
          <Text typo="body12" color="gray600">
            {dayjs(reservedDate).locale('ko').format('YYYY.MM.DD(ddd) • HH:mm')}
          </Text>
          <div css={tagsContainer}>
            {badges?.map((badge) => (
              <TextButton key={badge} css={tagButtonStyle}>
                #{badge}
              </TextButton>
            ))}
          </div>
        </div>
      </div>

      {imageUrl ? (
        <Image src={imageUrl} alt={`${name} 프로필`} css={profileImage} width={108} height={108} />
      ) : (
        <DefaultProfile css={profileImage} />
      )}
    </div>
  );
}
