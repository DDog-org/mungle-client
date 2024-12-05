import { useState } from 'react';
import { nanoid } from 'nanoid';
import dotenv from 'dotenv';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

dotenv.config();

interface Props {
  targetFolderPath:
    | 'user/profile-images'
    | 'groomer/profile-images'
    | 'groomer/business-licenses'
    | 'groomer/licenses'
    | 'vet/profile-images'
    | 'vet/licenses';
}

const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export function useS3({ targetFolderPath }: Props) {
  const [uploadedURLs, setUploadedURLs] = useState<string[]>([]);

  const uploadToS3 = async (files: File[]) => {
    if (!files.length) return;

    files.forEach(async (file) => {
      const id = nanoid();

      const params = {
        Bucket: process.env.AWS_BUCKET,
        Key: `${targetFolderPath}/${id}`,
        Body: file,
        ContentType: file.type,
      };

      try {
        const command = new PutObjectCommand(params);
        await s3Client.send(command);
        const url = `https://${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${`${targetFolderPath}/${id}`}`;
        setUploadedURLs((prev) => [...prev, url]);
      } catch (error) {
        throw new Error(String(error));
      }
    });

    return uploadedURLs;
  };

  return { uploadToS3 };
}
