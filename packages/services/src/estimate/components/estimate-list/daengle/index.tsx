import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  wrapper,
  headerContainer,
  tabContainer,
  tab,
  activeTab,
  userProfileContainer,
  profileButton,
  selectedProfile,
  optionContainer,
  optionButton,
  listContainer,
  card,
  contentContainer,
  profileImage,
  cardContent,
  cardHeader,
  name,
  getDistanceColor,
  tags,
  tagButton,
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

interface PetInfo {
  petId: number;
  petName: string;
  petImage: string;
  groomingEstimates: UserEstimateContent[];
  careEstimates: UserEstimateContent[];
}

interface Props {
  petInfos: PetInfo[];
}

export default function UserEstimateList({ petInfos }: Props): JSX.Element {
  const router = useRouter();
  // 필터 api GET값으로 변경될 가능성
  const [filterType, setFilterType] = useState<'미용사' | '병원'>('미용사');
  const [selectedPetIndex, setSelectedPetIndex] = useState(0);

  const selectedPet = petInfos[selectedPetIndex];
  const estimateData =
    selectedPet &&
    (filterType === '미용사' ? selectedPet.groomingEstimates : selectedPet.careEstimates);

  const handleRequestClick = () => {
    // 임시 경로
    router.push('/temporary-route');
  };

  return (
    <div css={wrapper}>
      <header css={headerContainer}>견적</header>
      <div css={tabContainer}>
        <button
          css={[tab, filterType === '미용사' && activeTab]}
          onClick={() => setFilterType('미용사')}
        >
          미용사
        </button>
        <button
          css={[tab, filterType === '병원' && activeTab]}
          onClick={() => setFilterType('병원')}
        >
          병원
        </button>
      </div>
      <div css={userProfileContainer}>
        {petInfos.map((pet, index) => (
          <button
            key={pet.petId}
            css={[profileButton, index === selectedPetIndex && selectedProfile]}
            onClick={() => setSelectedPetIndex(index)}
          >
            <img src={pet.petImage} alt={`${pet.petName} 프로필`} />
            {pet.petName}
          </button>
        ))}
      </div>
      <div css={optionContainer}>
        <button
          css={optionButton}
          onClick={() => {
            alert('해당 요청에 대한 견적을 그만 받으시겠습니까?');
          }}
        >
          견적 그만 받기
        </button>
        <button
          css={optionButton}
          onClick={() => {
            handleRequestClick();
          }}
        >
          내가 보낸 요청
        </button>
      </div>
      <div css={listContainer}>
        {estimateData &&
          estimateData.map((data) => (
            <div key={data.id} css={card}>
              <div css={contentContainer}>
                <div css={cardHeader}>
                  <div css={name}>{data.name}</div>
                  <div css={getDistanceColor(data.daengleMeter)}>🐾 {data.daengleMeter}m</div>
                </div>
                <div css={cardContent}>
                  <div>{data.shopName || ''}</div>
                  <p>{data.reservedDate}</p>
                  <div css={tags}>
                    {data.tags?.map((tag, index) => (
                      <span key={`${data.id}-${index}`} css={tagButton}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <img src={data.image} alt={`${data.name} 프로필`} css={profileImage} />
            </div>
          ))}
      </div>
    </div>
  );
}
