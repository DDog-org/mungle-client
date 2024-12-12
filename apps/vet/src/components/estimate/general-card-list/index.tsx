import { useRouter } from 'next/router';
import { Card } from 'node_modules/@daengle/services/src/components/estimate-list';

export function GeneralCardList() {
  const router = useRouter();

  const filteredData = [
    {
      id: 3,
      userImage: null,
      nickname: '닉네임',
      proposal: 'GENERAL',
      significant: null,
      reservedDate: '2024-11-25 11:22:11',
    },
    {
      id: 4,
      userImage: null,
      nickname: '닉네임',
      proposal: 'GENERAL',
      significant: null,
      reservedDate: '2024-11-25 11:22:11',
    },
    {
      id: 5,
      userImage: null,
      nickname: '닉네임',
      proposal: 'GENERAL',
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
