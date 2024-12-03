import { useState } from 'react';
import { nanoid } from 'nanoid';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

interface Props {
  targetFolderPath:
    | 'user/profile-images'
    | 'groomer/profile-images'
    | 'groomer/business-licenses'
    | 'groomer/licenses'
    | 'vet/profile-images'
    | 'vet/business-licenses'
    | 'vet/licenses';
}

const s3Client = new S3Client({
  region: process.env.AWS_REGION ?? '',
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID ?? '',
    secretAccessKey: process.env.SECRET_ACCESS_KEY ?? '',
  },
});

export function useUploadToS3({ targetFolderPath }: Props) {
  const uploadImageToS3 = async (files: File[]) => {
    const [uploadedURLs, setUploadedURLs] = useState<string[]>([]);

    if (!files.length) return;

    files.forEach(async (file) => {
      const id = nanoid();

      const params = {
        Bucket: process.env.ACCESS_BUCKET_NAME ?? '',
        Key: `${targetFolderPath}/${id}`,
        Body: file,
        ContentType: file.type,
      };

      try {
        const command = new PutObjectCommand(params);
        await s3Client.send(command);
        const url = `https://${params.Bucket}.s3.${s3Client.config.region}.amazonaws.com/${params.Key}`;
        setUploadedURLs((prev) => [...prev, url]);
      } catch (error) {
        throw new Error();
      }
    });

    return uploadedURLs;
  };

  return { uploadImageToS3 };
}
