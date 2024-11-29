import { useState, useRef, useEffect, CSSProperties, ReactNode } from 'react';
import { PostcodeConstructor, PostcodeOptions, Address as AddressType } from './index.d';

export const POSTCODE_SCRIPT_URL =
  'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

export type Address = AddressType;

export interface DaumPostcodeProps
  extends Omit<
    PostcodeOptions,
    'oncomplete' | 'onresize' | 'onclose' | 'onsearch' | 'width' | 'height'
  > {
  onComplete?: PostcodeOptions['oncomplete'];
  onResize?: PostcodeOptions['onresize'];
  onClose?: PostcodeOptions['onclose'];
  onSearch?: PostcodeOptions['onsearch'];
  className?: string;
  style?: CSSProperties;
  defaultQuery?: string;
  errorMessage?: string | ReactNode;
  scriptUrl?: string;
  autoClose?: boolean;
}

export const loadPostcode = (() => {
  const scriptId = 'daum_postcode_script';
  let promise: Promise<PostcodeConstructor> | null = null;

  return (url: string = POSTCODE_SCRIPT_URL): Promise<PostcodeConstructor> => {
    if (promise) return promise;

    promise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = () => {
        if (window?.daum?.Postcode) {
          return resolve(window.daum.Postcode);
        }
        reject(new Error('주소 검색 서비스를 불러오는 데 실패했어요. 다시 시도해 주세요.'));
      };
      script.onerror = (error) => reject(error);
      script.id = scriptId;

      document.body.appendChild(script);
    });

    return promise;
  };
})();

const defaultErrorMessage = (
  <p>현재 Daum 우편번호 서비스를 이용할 수 없습니다. 잠시 후 다시 시도해 주세요.</p>
);

const defaultStyle = {
  width: '100%',
  height: '100%',
};

export default function DaumPostcode({
  scriptUrl = POSTCODE_SCRIPT_URL,
  errorMessage = defaultErrorMessage,
  autoClose = true,
  className,
  style,
  defaultQuery,
  onComplete,
  onResize,
  onClose,
  onSearch,
  ...options
}: DaumPostcodeProps) {
  const wrap = useRef<HTMLDivElement | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    if (!scriptUrl) return;

    let mounted = true;

    loadPostcode(scriptUrl)
      .then((Postcode) => {
        if (!mounted || !wrap.current) return;

        const postcode = new Postcode({
          ...options,
          oncomplete: (address) => {
            if (onComplete) onComplete(address);
            if (autoClose && wrap.current) wrap.current.innerHTML = '';
          },
          onsearch: onSearch,
          onresize: onResize,
          onclose: onClose,
          width: '100%',
          height: '100%',
        });

        postcode.embed(wrap.current, { q: defaultQuery, autoClose });
      })
      .catch(() => {
        setHasError(true);
      });

    return () => {
      mounted = false;
    };
  }, [scriptUrl, autoClose, defaultQuery, onComplete, onResize, onClose, onSearch, options]);

  return (
    <div ref={wrap} className={className} style={{ ...defaultStyle, ...style }}>
      {hasError && errorMessage}
    </div>
  );
}
