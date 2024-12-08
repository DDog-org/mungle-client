import { useRouter } from 'next/router';
import { ROUTES } from '~/constants/commons/routes';
import { DaumPostcode, Address } from '@daengle/services/libs';
import { useUserInfoFormStore } from '~/stores/auth/user-info-form';
import { wrapper } from './index.styles';

export function SearchAddress() {
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
