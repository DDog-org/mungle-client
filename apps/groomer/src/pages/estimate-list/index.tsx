import { EstimateList } from '@daengle/services';

const apiData = [
  {
    groomingEstimateId: 1,
    userImage: 'https://via.placeholder.com/40',
    nickname: '미꼬누나',
    proposal: 'GENERAL',
    petSignificant: '노견, 슬개골 탈구',
    reservedDate: '2024-11-25 11:22:11',
  },
  {
    groomingEstimateId: 3,
    userImage: 'https://via.placeholder.com/40',
    nickname: '사용자 닉네임',
    proposal: 'DESIGNATION',
    petSignificant: '특이사항 없음',
    reservedDate: '2024-11-25 11:22:11',
  },
  {
    groomingEstimateId: 4,
    userImage: 'https://via.placeholder.com/40',
    nickname: '사용자 닉네임',
    proposal: 'GENERAL',
    petSignificant: '특이사항 없음',
    reservedDate: '2024-11-25 11:22:11',
  },
];

const estimateData = apiData.map((data) => ({
  id: data.groomingEstimateId,
  userImage: data.userImage,
  nickname: data.nickname,
  proposal: data.proposal,
  petSignificant: data.petSignificant,
  reservedDate: data.reservedDate,
}));

export default function List() {
  return (
    <div>
      <EstimateList estimateData={estimateData} />
    </div>
  );
}
