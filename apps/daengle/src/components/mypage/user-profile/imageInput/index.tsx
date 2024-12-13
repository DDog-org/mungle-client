import { forwardRef, ChangeEvent, useImperativeHandle, useRef, useState } from 'react';
import {
  defaultImage,
  profileEditButtonBox,
  profileImageWrapper,
  thumbnailImage,
  uploadImageButton,
  wrapper,
} from './index.styles';
import { TextButton, Text } from '@daengle/design-system';
import { DefaultImage } from '@daengle/design-system/icons';

interface Props {
  onChange?: (files: File | null) => void;
  defaultValue?: string;
}

export const ImageInputBox = forwardRef(({ onChange, defaultValue }: Props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  useImperativeHandle(ref, () => ({
    getFile: () => file,
  }));

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      onChange?.(uploadedFile);
    }
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const openFilePicker = () => {
    inputRef.current?.click();
  };

  const thumbnailSrc = file
    ? URL.createObjectURL(file) // 업로드된 파일 미리보기
    : defaultValue || ''; // 기본값으로 설정된 URL

  return (
    <div css={wrapper}>
      <div css={profileImageWrapper}>
        <label css={uploadImageButton}>
          {thumbnailSrc ? (
            <img src={thumbnailSrc} alt="썸네일" css={thumbnailImage} />
          ) : (
            <div css={defaultImage}>
              <DefaultImage width={116} height={116} />
            </div>
          )}
          <input type="file" accept="image/*" ref={inputRef} onChange={handleFileInputChange} />
        </label>
        <TextButton css={profileEditButtonBox} onClick={openFilePicker}>
          <Text typo="body4" color="gray400">
            프로필 사진 변경하기
          </Text>
        </TextButton>
      </div>
    </div>
  );
});
