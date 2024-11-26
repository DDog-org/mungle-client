import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  wrapper,
  headerContainer,
  tabContainer,
  tab,
  activeTab,
  listContainer,
  card,
  contentContainer,
  detailContainer,
  profileImage,
  cardContent,
  cardHeader,
  name,
  type,
  general,
  designated,
  specials,
  specialsNot,
  date,
  detailButton,
} from './index.styles';
//import NavBar

interface EstimateContent {
  id: number;
  userImage: string;
  nickname: string;
  proposal: string;
  petSignificant: string;
  reservedDate: string;
}

interface Props {
  estimateData: EstimateContent[];
}

export default function EstimateList({ estimateData }: Props): JSX.Element {
  const [filterType, setFilterType] = useState<'전체' | '지정'>('전체');

  const filteredData =
    filterType === '전체'
      ? estimateData
      : estimateData.filter((data) => data.proposal === 'DESIGNATION');

  return (
    <div css={wrapper}>
      <header css={headerContainer}>견적</header>
      <div css={tabContainer}>
        <button
          css={[tab, filterType === '전체' && activeTab]}
          onClick={() => setFilterType('전체')}
        >
          전체 견적서
        </button>
        <button
          css={[tab, filterType === '지정' && activeTab]}
          onClick={() => setFilterType('지정')}
        >
          지정 견적서
        </button>
      </div>
      <div css={listContainer}>
        {filteredData.map((data) => (
          <EstimateCard key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
}

function EstimateCard({
  userImage,
  nickname,
  proposal,
  petSignificant,
  reservedDate,
}: EstimateContent): JSX.Element {
  const router = useRouter();

  const handleDetailClick = () => {
    router.push(`/details?nickname=${encodeURIComponent(nickname)}`); // 임시 경로입니다.
  };

  return (
    <div css={card}>
      {/* contentContainer */}
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

      {/* detailContainer */}
      <div css={detailContainer}>
        <button css={detailButton} onClick={handleDetailClick}>
          자세히 보기 &gt;
        </button>
      </div>
    </div>
  );
}
