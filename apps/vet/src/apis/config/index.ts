import { createHttpClient } from '@daengle/services/apis';
export const { api } = createHttpClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? '',
  role: 'vet',
});
