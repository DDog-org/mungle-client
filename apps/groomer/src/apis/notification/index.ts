import { GetGroomerScheduleResponse } from '~/models';
import { api } from '../config';

export const getGroomerSchedule = async () => {
  return await api.get<GetGroomerScheduleResponse>('/groomer/schedule');
};
