import { UserEstimateList } from '@daengle/services';

const petInfos = [
  {
    petId: 1,
    petName: '강아지A',
    petImage: 'https://via.placeholder.com/40',
    groomingEstimates: [
      {
        id: 2,
        name: '미용사A',
        daengleMeter: 10,
        image: 'https://placehold.co/400',
        shopName: null,
        reservedDate: '2024-11-25 11:33:22',
        tags: ['대형견, 노견'],
      },
      {
        id: 19,
        name: '미용사A',
        daengleMeter: 20,
        image: 'https://placehold.co/400',
        shopName: null,
        reservedDate: '2024-11-25 11:33:22',
      },
      {
        id: 22,
        name: '미용사A',
        daengleMeter: 30,
        image: 'https://placehold.co/400',
        shopName: null,
        reservedDate: '2024-11-25 11:33:22',
        tags: ['대형견, 노견'],
      },
    ],
    careEstimates: [
      {
        id: 5,
        name: '수의사A',
        daengleMeter: 60,
        image: 'https://placehold.co/400',
        reservedDate: '2024-11-25 11:33:22',
      },
    ],
  },
  {
    petId: 2,
    petName: '강아지B',
    petImage: 'https://via.placeholder.com/40',
    groomingEstimates: [
      {
        id: 87,
        name: '미용사A',
        daengleMeter: 87,
        image: 'https://placehold.co/400',
        shopName: null,
        reservedDate: '2024-11-25 11:33:22',
      },
    ],
    careEstimates: [
      {
        id: 6,
        name: '수의사A',
        daengleMeter: 50,
        image: 'https://placehold.co/400',
        reservedDate: '2024-11-25 11:33:22',
      },
    ],
  },
];

export default function EstimatePage() {
  return (
    <div>
      <UserEstimateList petInfos={petInfos} />
    </div>
  );
}
