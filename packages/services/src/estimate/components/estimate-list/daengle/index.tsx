import { useRouter } from 'next/router';
import { useState } from 'react';
import { RoundButton, Text, TextButton } from '@daengle/design-system';
import {
  wrapper,
  headerContainer,
  tabContainer,
  tabButton,
  activeTabButton,
  profileContainer,
  profileButton,
  selectedProfileButton,
  optionContainer,
  listContainer,
  card,
  contentContainer,
  profileImage,
  cardContent,
  cardHeader,
  nameStyle,
  distanceStyle,
  tagsContainer,
  tagButtonStyle,
  emptyStateWrapper,
  emptyButton,
  emptyText,
  hiddenContainer,
} from './index.styles';
import { EmptyStateBone } from '@daengle/design-system/icons';

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
  petId: number | null;
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
  const [filterType, setFilterType] = useState<'미용사' | '병원'>('미용사');
  const [selectedPetIndex, setSelectedPetIndex] = useState(0);

  const selectedPet = petInfos[selectedPetIndex] ?? null;

  const estimateData =
    selectedPet &&
    (filterType === '미용사' ? selectedPet.groomingEstimates : selectedPet.careEstimates);

  return (
    <div css={wrapper}>
      <div css={headerContainer}>
        <Text typo="title1">견적</Text>
      </div>

      <div css={tabContainer}>
        <TextButton
          css={[tabButton, filterType === '미용사' && activeTabButton]}
          onClick={() => setFilterType('미용사')}
        >
          미용사
        </TextButton>
        <TextButton
          css={[tabButton, filterType === '병원' && activeTabButton]}
          onClick={() => setFilterType('병원')}
        >
          병원
        </TextButton>
      </div>

      {petInfos.length > 0 ? (
        <div css={profileContainer}>
          {petInfos.map((pet, index) => (
            <TextButton
              key={pet.petId}
              css={[profileButton, index === selectedPetIndex && selectedProfileButton]}
              onClick={() => setSelectedPetIndex(index)}
              icons={{
                prefix: pet.petImage ? (
                  <img src={pet.petImage} alt={`${pet.petName} 프로필`} />
                ) : null,
              }}
            >
              {pet.petName}
            </TextButton>
          ))}
        </div>
      ) : (
        <div css={hiddenContainer} aria-hidden="true" />
      )}

      <div css={optionContainer}>
        <TextButton
          onClick={() => {
            alert('해당 요청에 대한 견적을 그만 받으시겠습니까?');
          }}
        >
          <Text typo="body4" color="gray500">
            견적 그만 받기
          </Text>
        </TextButton>
        <TextButton onClick={() => router.push('/temporary-route')}>
          <Text typo="body4" color="gray500">
            내가 보낸 요청
          </Text>
        </TextButton>
      </div>

      {estimateData && estimateData.length > 0 ? (
        <div css={listContainer}>
          {estimateData.map((data) => (
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
      ) : (
        <div css={emptyStateWrapper}>
          <EmptyStateBone />
          <div css={emptyText}>선택한 탭에 대한 견적이 없습니다.</div>
          <RoundButton
            css={emptyButton}
            size="M"
            variant="primary"
            onClick={() => router.push('/request-estimate')}
          >
            견적 요청하기
          </RoundButton>
        </div>
      )}
    </div>
  );
}
