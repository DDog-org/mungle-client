import { useRouter } from 'next/router';
import { ROUTES } from '~/constants/routes';
import { DaumPostcode, Address } from '@daengle/services';
import { useUserInfoFormStore } from '~/pages/onboarding/store/user-info-form';
import { wrapper } from './index.styles';

export default function SearchAddress() {
  const router = useRouter();
  const { setForm } = useUserInfoFormStore();

  const handleSearchAddressComplete = (address: Address) => {
    const jibunAddress = `${address.sido} ${address.sigungu} ${address.bname}`;
    setForm({ address: jibunAddress });

    router.replace(ROUTES.ONBOARDING_USER_INFO);
  };

  return (
    <section css={wrapper}>
      <DaumPostcode onComplete={handleSearchAddressComplete} />
    </section>
  );
}
