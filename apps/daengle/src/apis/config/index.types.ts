import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface HttpClient extends AxiosInstance {
  get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T>;
  put<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T>;
  patch<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T>;
  delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
}

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

export function convertToDaengleSuccessResponse<T>(response: AxiosResponse<T>): DaengleResponse<T> {
  return {
    success: true,
    response: response.data,
    error: null,
  };
}

export function convertToDaengleErrorResponse(error: AxiosError): DaengleResponse<null> {
  return {
    success: false,
    response: null,
    error: {
      name: error.name,
      message: error.message,
      config: error.config,
      response: error.response as AxiosResponse<DaengleError>,
      isAxiosError: error.isAxiosError,
      toJSON: error.toJSON,
    },
  };
}
