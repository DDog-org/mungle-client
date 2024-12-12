import { useRouter } from 'next/router';
import { Card } from 'node_modules/@daengle/services/src/components/estimate-list';

export function DesignationCardList() {
  const router = useRouter();

  const filteredData = [
    {
      id: 5,
      userImage: '/test.jpg',
      nickname: '닉네임',
      proposal: 'DESIGNATION',
      significant: null,
      reservedDate: '2024-11-25 11:22:11',
    },
    {
      id: 6,
      userImage: '/test.jpg',
      nickname: '닉네임',
      proposal: 'DESIGNATION',
      significant: null,
      reservedDate: '2024-11-25 11:22:11',
    },
    {
      id: 7,
      userImage: '/test.jpg',
      nickname: '닉네임',
      proposal: 'DESIGNATION',
      significant: null,
      reservedDate: '2024-11-25 11:22:11',
    },
  ];

  return (
    <div>
      {filteredData.map((data) => (
        <Card key={data.id} onDetailClick={() => router.push(`/estimate/${data.id}`)} {...data} />
      ))}
    </div>
  );
}
