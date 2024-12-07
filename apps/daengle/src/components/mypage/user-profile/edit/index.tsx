import { forwardRef, ChangeEvent, useImperativeHandle, useRef } from 'react';
import {
  deleteImageButton,
  imageWrapper,
  thumbnailImage,
  uploadImageButton,
  wrapper,
} from './index.styles';

interface Props {
  onChange?: (files: File[]) => void;
  defaultValue?: File[];
  maxLength?: number;
}

export const ImageInputBox = forwardRef(({ onChange, defaultValue = [] }: Props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const filesRef = useRef<File[]>(defaultValue);

  useImperativeHandle(ref, () => ({
    getFiles: () => filesRef.current,
  }));

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const uploadedImages = Array.from(e.target.files);
    const totalFiles = filesRef.current.length + uploadedImages.length;

    filesRef.current = [...filesRef.current, ...uploadedImages];
    onChange?.(filesRef.current);

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleRemoveImage = (index: number) => {
    filesRef.current = filesRef.current.filter((_, idx) => idx !== index);
    onChange?.(filesRef.current);
  };

  return (
    <div css={wrapper}>
      <label css={uploadImageButton}>
        <input
          type="file"
          accept="image/*"
          multiple
          ref={inputRef}
          onChange={handleFileInputChange}
        />
      </label>

      {/* {filesRef.current.map((file, index) => (
        <div key={file.name + index} css={imageWrapper}>
          <button css={deleteImageButton} onClick={() => handleRemoveImage(index)}>
            <div />
          </button>
          <img src={URL.createObjectURL(file)} alt={file.name} css={thumbnailImage} />
        </div>
      ))} */}
    </div>
  );
});
