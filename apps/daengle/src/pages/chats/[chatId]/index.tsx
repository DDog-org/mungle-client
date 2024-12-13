import { css } from '@emotion/react';
import { AppBar, CapsuleButton, Layout, Text, theme } from '@daengle/design-system';
import { ChatPlus, ChatSendButton, DefaultImage } from '@daengle/design-system/icons';
import { Bubble } from '~/components/chats/bubble';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants/commons';

export default function ChatRoom() {
  const router = useRouter();

  return (
    <Layout>
      <AppBar title="문소연 디자이너" suffix={<></>} onBackClick={router.back} />

      <section css={wrapper}>
        <div css={estimateWrapper}>
          <div css={profileWrapper}>
            <DefaultImage width={32} height={32} />
            <Text typo="body5" color="black">
              문소연 디자이너
            </Text>
          </div>

          <CapsuleButton size="S" onClick={() => router.push(ROUTES.ESTIMATE_DETAIL(1))}>
            <Text typo="body2" color="gray500">
              견적서 상세보기
            </Text>
          </CapsuleButton>
        </div>

        <section css={chatList}>
          <Bubble.Sender />
          <Bubble.Receiver />
          <Bubble.Sender />
          <Bubble.Receiver />
          <Bubble.Sender />
          <Bubble.Receiver />
          <Bubble.Sender />
          <Bubble.Receiver />
          <Bubble.Sender />
          <Bubble.Sender />
          <Bubble.Sender />
          <Bubble.Receiver />
          <Bubble.Sender />
          <Bubble.Receiver />
          <Bubble.Sender />
          <Bubble.Receiver />
        </section>
      </section>

      <div css={inputFieldWrapper}>
        <ChatPlus width={32} height={32} />

        <form css={inputWrapper}>
          <input css={input} placeholder="메시지를 입력해 주세요" />
          <button type="submit">
            <ChatSendButton width={24} height={24} cursor="pointer" />
          </button>
        </form>
      </div>
    </Layout>
  );
}

const wrapper = css`
  position: relative;
  overflow: hidden;

  width: 100%;
  height: 100%;
`;

export const estimateWrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;

  width: 100%;
  padding: 12px 18px;
  border-radius: 0 0 10px 10px;

  background: ${theme.colors.white};
  box-shadow: 0 1px 10px 0 rgb(0 0 0 / 5%);

  border-top: 1px solid ${theme.colors.gray100};

  svg,
  img {
    border-radius: 50%;

    background: ${theme.colors.gray200};
  }
`;

export const profileWrapper = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const chatList = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;

  width: 100%;
  height: 100%;
  padding: calc(56px + 24px) 18px calc(78px + 18px) 18px;
`;

export const inputFieldWrapper = css`
  display: flex;
  align-items: center;
  gap: 4px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  max-width: ${theme.size.maxWidth};
  margin: 0 auto;
  padding: 20px 18px;

  background: white;
  box-shadow: 0 -4px 10px 0 rgb(0 0 0 / 5%);
`;

export const inputWrapper = css`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 8px 8px 8px 18px;
  border: 1px solid ${theme.colors.gray200};
  border-radius: 21px;
`;

export const input = css`
  width: 100%;
  height: 100%;
  ${theme.typo.body12};

  ::placeholder {
    color: ${theme.colors.gray200};
  }
`;
