import { FormEvent, forwardRef, InputHTMLAttributes, useImperativeHandle, useRef } from 'react';
import { ChatPlus, ChatSendButton, PartnerChatPlus } from '../../../icons';
import { input, wrapper, inputWrapper } from './index.styles';

export interface InputFormRef {
  getValue: () => string | undefined;
  reset: () => void;
}

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onSubmit'> {
  service?: 'daengle' | 'partner';
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

export const ChatInputForm = forwardRef<InputFormRef, Props>(
  ({ service = 'daengle', spellCheck = false, autoComplete = 'off', onSubmit, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      getValue: () => inputRef.current?.value,
      reset: () => {
        if (inputRef.current) inputRef.current.value = '';
      },
    }));

    return (
      <div css={wrapper}>
        <form css={inputWrapper} onSubmit={onSubmit}>
          <input
            css={input}
            placeholder="메시지를 입력해 주세요"
            ref={inputRef}
            spellCheck={spellCheck}
            autoComplete={autoComplete}
            {...props}
          />
          <button type="submit">
            {service === 'daengle' ? (
              <ChatSendButton width={24} height={24} />
            ) : (
              <PartnerChatPlus width={24} height={24} />
            )}
          </button>
        </form>
      </div>
    );
  }
);
