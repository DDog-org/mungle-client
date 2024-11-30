import { useRouter } from 'next/router';
import {
  card,
  contentContainer,
  cardHeader,
  profileImage,
  name,
  type,
  general,
  designated,
  cardContent,
  specials,
  specialsNot,
  date,
  detailContainer,
  detailButton,
} from './index.styles';
//여기 story-book 적용해라잇
interface EstimateContent {
  id: number;
  userImage: string;
  nickname: string;
  proposal: 'GENERAL' | 'DESIGNATION';
  petSignificant: string;
  reservedDate: string;
}

export default function Card({
  id,
  userImage,
  nickname,
  proposal,
  petSignificant,
  reservedDate,
}: EstimateContent): JSX.Element {
  const router = useRouter();

  const handleDetailClick = () => {
    router.push(`/details?nickname=${encodeURIComponent(nickname)}`);
  };

  return (
    <div css={card}>
      <div css={contentContainer}>
        {/* Header */}
        <div css={cardHeader}>
          <img src={userImage} alt={`${nickname} 프로필`} css={profileImage} />
          <span css={name}>{nickname}</span>
          <span css={[type, proposal === 'DESIGNATION' ? designated : general]}>
            {proposal === 'GENERAL' ? '일반' : '지정'}
          </span>
        </div>

        {/* Content */}
        <div css={cardContent}>
          <p css={[specials, petSignificant === '특이사항 없음' && specialsNot]}>
            {petSignificant}
          </p>
          <p css={date}>{reservedDate}</p>
        </div>
      </div>

      {/* Detail Button */}
      <div css={detailContainer}>
        <button css={detailButton} onClick={handleDetailClick}>
          자세히 보기 &gt;
        </button>
      </div>
    </div>
  );
}
