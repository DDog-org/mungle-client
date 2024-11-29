import { useRouter } from 'next/router';
import { AppBar, Layout } from '@daengle/design-system';
import { ROUTES } from '~/constants/routes';
import DaumPostcode, { Address } from '~/libs/postcode';
import { wrapper } from './index.styles';
import { useOnboardingFormStore } from '../user-info/store/form';

export default function SearchAddress() {
  const router = useRouter();
  const { setForm } = useOnboardingFormStore();

  const handleSearchAddressComplete = (address: Address) => {
    const jibunAddress = `${address.sido} ${address.sigungu} ${address.bname}`;
    setForm({ address: jibunAddress });

    router.replace(ROUTES.ONBOARDING_USER_INFO);
  };

  return (
    <Layout>
      <section css={wrapper}>
        <AppBar onBackClick={router.back} />
        <DaumPostcode onComplete={handleSearchAddressComplete} />
      </section>
    </Layout>
  );
}
