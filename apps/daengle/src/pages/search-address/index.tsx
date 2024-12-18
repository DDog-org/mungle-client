import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { AppBar, Layout } from '@daengle/design-system';
import { DaumPostcode, Address } from '@daengle/services/libs';
import { ROUTES } from '~/constants/commons';
import { useAddressStore } from '~/stores';

export default function SearchAddress() {
  const router = useRouter();
  const { setAddress } = useAddressStore();

  const handleSearchAddress = (address: Address) => {
    const jibunAddress = `${address.sido} ${address.sigungu} ${address.bname}`;
    setAddress(jibunAddress);
    router.push(ROUTES.HOME);
  };

  return (
    <Layout>
      <AppBar onBackClick={router.back} onHomeClick={() => router.push(ROUTES.HOME)} />
      <section css={wrapper}>
        <DaumPostcode onComplete={handleSearchAddress} />
      </section>
    </Layout>
  );
}

const wrapper = css`
  width: 100%;
  height: 100%;
`;
