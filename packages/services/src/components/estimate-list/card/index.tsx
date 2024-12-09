import { useRouter } from 'next/router';
import { Text, TextButton } from '@daengle/design-system';
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
import { ButtonTextButtonArrow } from '@daengle/design-system/icons';

interface EstimateContent {
  id: number;
  userImage: string;
  nickname: string;
  proposal: 'GENERAL' | 'DESIGNATION';
  significant: string | null;
  reservedDate: string;
}

export function Card({
  id,
  userImage,
  nickname,
  proposal,
  significant,
  reservedDate,
}: EstimateContent): JSX.Element {
  const router = useRouter();
  const groomingEstimateId = id;

  const handleDetailClick = () => {
    router.push(`/estimate/detail/${groomingEstimateId}`);
  };

  return (
    <div css={wrapper} onClick={handleDetailClick}>
      <div css={contentContainer}>
        <div css={cardHeader}>
          <img src={userImage} alt={`${nickname} 프로필`} css={profileImage} />
          <Text typo="body1">{nickname}</Text>
          <span css={[type, proposal === 'DESIGNATION' ? designated : general]}>
            {proposal === 'GENERAL' ? '일반' : '지정'}
          </span>
        </div>

        <div css={cardContent}>
          <p css={[specials, significant === '' && specialsNot]}>
            {significant ? significant : '특이사항 없음'}
          </p>
          <Text typo="body11" color="gray500">
            {reservedDate}
          </Text>
        </div>
      </div>

      <div css={detailContainer}>
        <TextButton
          icons={{ suffix: <ButtonTextButtonArrow width="6px" /> }}
          onClick={handleDetailClick}
        >
          <Text typo="body7" color="gray200">
            자세히보기
          </Text>
        </TextButton>
      </div>
    </div>
  );
}
