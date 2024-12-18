import { AxiosError, AxiosResponse } from 'axios';

export interface DaengleError {
  status: number;
  code: number;
  message: string;
}

export interface DaengleErrorResponse extends AxiosError<DaengleError> {
  response: AxiosResponse<DaengleError>;
}

export interface DaengleResponse<T> {
  success: boolean;
  response: T | null;
  error: DaengleErrorResponse | null;
}
