export interface PetProfileEditType {
  id: number;
  image: string;
  name: string;
  birth: number;
  gender: 'MALE' | 'FEMALE';
  breed: string;
  isNeutered: boolean;
  weight: 'SMALL' | 'MEDIUM' | 'LARGE';
  groomingExperience: boolean;
  isBite: boolean;
  dislikeParts: string[];
  significantTags: string[];
  significant: string;
}

export interface DislikeParts {
  part: string;
  partName: string;
}
export interface SignificantTags {
  tagName: string;
  tag: string;
}

export interface PetProfileCreateFormType {
  image: File | null;
  name: string;
  birth: number;
  gender: 'MALE' | 'FEMALE';
  breed: string;
  isNeutered: boolean;
  weight: 'SMALL' | 'MEDIUM' | 'LARGE';
  groomingExperience: boolean;
  isBite: boolean;
  dislikeParts: DislikeParts[];
  significantTags: SignificantTags[];
  significant: string;
}
