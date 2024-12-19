import { useRouter } from 'next/router';

export default function Porfolio() {
  const router = useRouter();
  const { instagram } = router.query;

  return (
    <iframe
      src={`https://www.instagram.com/${instagram}/embed`}
      style={{
        width: '100%',
        height: '600px',
        border: 'none',
      }}
      allowFullScreen
    ></iframe>
  );
}
