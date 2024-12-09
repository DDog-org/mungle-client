import { useRouter } from 'next/router';
import { AppBar, Layout } from '@daengle/design-system';
import { DaumPostcode, Address } from '@daengle/services/libs';
import { ROUTES } from '~/constants/commons/routes';
import { useVetInfoFormStore } from '~/stores/auth';
import { css } from '@emotion/react';

export default function SearchAddress() {
  const router = useRouter();
  const { setVetInfoForm } = useVetInfoFormStore();

  const handleSearchAddressComplete = (address: Address) => {
    const jibunAddress = `${address.sido} ${address.sigungu} ${address.bname}`;
    setVetInfoForm({ address: jibunAddress, detailAddress: address.buildingName });
    router.push(ROUTES.ONBOARDING);
  };

  return (
    <Layout>
      <AppBar onBackClick={router.back} />
      <section css={wrapper}>
        <DaumPostcode onComplete={handleSearchAddressComplete} />
      </section>
    </Layout>
  );
}

const wrapper = css`
  width: 100%;
  height: 100%;
`;
