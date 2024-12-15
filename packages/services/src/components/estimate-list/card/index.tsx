import { Text, TextButton } from '@daengle/design-system';
import { ButtonTextButtonArrow, DefaultProfile } from '@daengle/design-system/icons';
import {
  wrapper,
  contentContainer,
  cardHeader,
  profileImage,
  type,
  general,
  designated,
  cardContent,
  specials,
  specialsNot,
  detailContainer,
} from './index.styles';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

interface EstimateGeneralListType {
  id: number;
  imageUrl: string;
  nickname: string;
  proposal: 'GENERAL' | 'DESIGNATION';
  significant: string;
  reservedDate: string;
  onDetailClick: () => void;
}

export function Card({
  id,
  imageUrl,
  nickname,
  proposal,
  significant,
  reservedDate,
  onDetailClick,
}: EstimateGeneralListType): JSX.Element {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = '';
  };

  return (
    <div css={wrapper} onClick={onDetailClick}>
      <div css={contentContainer}>
        <div css={cardHeader}>
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={`${nickname} 프로필`}
              css={profileImage}
              onError={handleImageError}
            />
          ) : (
            <DefaultProfile width={30} height={30} css={profileImage} />
          )}
          <Text typo="body1">{nickname}</Text>
          <span css={[type, proposal === 'DESIGNATION' ? designated : general]}>
            {proposal === 'GENERAL' ? '일반' : '지정'}
          </span>
        </div>

        <div css={cardContent}>
          <p css={[specials, significant === null && specialsNot]}>
            {significant ? significant : '특이사항 없음'}
          </p>
          <Text typo="body11" color="gray500">
            {dayjs(reservedDate).locale('ko').format('YYYY.MM.DD(ddd) • HH:mm')}
          </Text>
        </div>
      </div>

      <div css={detailContainer}>
        <TextButton
          icons={{ suffix: <ButtonTextButtonArrow width="6px" stroke="#BEBEBE" /> }}
          onClick={onDetailClick}
        >
          <Text typo="body7" color="gray400">
            자세히보기
          </Text>
        </TextButton>
      </div>
    </div>
  );
}
