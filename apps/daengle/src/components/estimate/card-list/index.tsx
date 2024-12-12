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
import { DefaultProfile } from '@daengle/design-system/icons';
import {
  GetUserEstimateGeneralGroomingList,
  GetUserEstimateGeneralGroomingResponse,
} from '~/models';

// interface GroomingEstimate {
//   id: number;
//   image: string;
//   name: string;
//   daengleMeter: number;
//   shopName?: string | null;
//   reservedDate: string;
//   tags?: string[];
// }

// interface CareEstimate {
//   id: number;
//   image: string;
//   name: string;
//   daengleMeter: number;
//   shopName?: string | null;
//   reservedDate: string;
//   tags?: string[];
// }

type UserEstimateContent = GetUserEstimateGeneralGroomingList;

interface Props {
  mode: 'general' | 'designation'; // 모드에 따라 UI나 표시 방식 변경
  category: 'groomer' | 'vet'; // 미용사/병원 구분
  estimateData: UserEstimateContent[]; // 상위 컴포넌트에서 가져온 견적 리스트 데이터
  onCardClick?: (id: number) => void;
}

export function CardList({ mode, category, estimateData, onCardClick }: Props): JSX.Element {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = '';
  };

  if (estimateData.length === 0) {
    return <div>견적서가 없습니다.</div>;
  }

  const isDesignation = mode === 'designation';

  return (
    <div css={wrapper}>
      {estimateData.map((item) => (
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
            <div css={cardContent}>
              <Text typo="body11" color="gray400">
                {item.shopName || ''}
              </Text>
              <Text typo="body12" color="gray600">
                {item.reservedDate}
              </Text>
              <div css={tagsContainer}>
                {item.tags?.map((tag, index) => (
                  <TextButton
                    key={`${item.id}-${index}`}
                    css={tagButtonStyle}
                    onClick={() => onCardClick?.(item.id)}
                  >
                    #{tag}
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
              onClick={() => onCardClick?.(item.id)}
              onError={handleImageError}
            />
          ) : (
            <DefaultProfile css={profileImage} onClick={() => onCardClick?.(item.id)} />
          )}
        </div>
      ))}
    </div>
  );
}

// interface Props {
//   estimateData: UserEstimateContent[];
//   isDesignation: boolean;
//   onCardClick?: (id: number) => void;
// }

// export function CardList({ estimateData, isDesignation, onCardClick }: Props): JSX.Element {
//   const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
//     event.currentTarget.onerror = null;
//     event.currentTarget.src = '';
//   };

//   return (
//     <div css={wrapper}>
//       {estimateData?.map((data) => (
//         <div key={data.id} css={card}>
//           <div css={contentContainer} onClick={() => onCardClick?.(data.id)}>
//             <div css={cardHeader}>
//               <Text css={nameStyle} typo="subtitle3">
//                 {data.name}
//               </Text>
//               <div css={distanceStyle(data.daengleMeter)}>
//                 {/* 상태 확인 데이터 추후 필요한 부분 */}
//                 {isDesignation ? `진행 중` : `🐾 ${data.daengleMeter}m`}
//               </div>
//             </div>
//             <div css={cardContent}>
//               <Text typo="body11" color="gray400">
//                 {data.shopName || ''}
//               </Text>
//               <Text typo="body12" color="gray600">
//                 {data.reservedDate}
//               </Text>
//               <div css={tagsContainer}>
//                 {data.tags?.map((tag, index) => (
//                   <TextButton
//                     key={`${data.id}-${index}`}
//                     css={tagButtonStyle}
//                     onClick={() => onCardClick?.(data.id)}
//                   >
//                     #{tag}
//                   </TextButton>
//                 ))}
//               </div>
//             </div>
//           </div>
//           {data.image ? (
//             <img
//               src={data.image}
//               alt={`${data.name} 프로필`}
//               css={profileImage}
//               onClick={() => onCardClick?.(data.id)}
//               onError={handleImageError}
//             />
//           ) : (
//             <DefaultProfile css={profileImage} onClick={() => onCardClick?.(data.id)} />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
