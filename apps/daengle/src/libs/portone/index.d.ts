declare global {
  interface Window {
    IMP?: {
      init: (merchantCode: string) => void;
      request_pay: (params: any, callback?: (response: any) => void) => void;
    };
  }
}
export {};
