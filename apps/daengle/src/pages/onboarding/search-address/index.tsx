import { useRouter } from 'next/router';
import { AppBar } from '@daengle/design-system';
import { ROUTES } from '~/constants/routes';
import DaumPostcode, { Address } from '~/libs/postcode';
import { useSearchAddressStore } from '~/store/onboarding/address';
import { wrapper } from './index.styles';

export default function SearchAddress() {
  const router = useRouter();
  const { setAddress } = useSearchAddressStore();

  const handleSearchAddressComplete = (data: Address) => {
    setAddress(data);
    router.replace(ROUTES.ONBOARDING_USER_INFO);
  };

  return (
    <section css={wrapper}>
      <AppBar onBackClick={router.back} />
      <DaumPostcode onComplete={handleSearchAddressComplete} />
    </section>
  );
}
