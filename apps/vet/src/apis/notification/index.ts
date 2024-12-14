import { GetVetScheduleResponse } from '~/models';
import { api } from '../config';

export const getVetSchedule = async () => {
  return await api.get<GetVetScheduleResponse>('/vet/schedule');
};
