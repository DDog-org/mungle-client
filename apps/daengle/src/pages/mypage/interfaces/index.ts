export interface PetProfileEditType {
  id: number;
  image: string;
  name: string;
  birth: number;
  gender: string;
  breed: string;
  isNeutered: boolean;
  weight: 'SMALL' | 'MEDIUM' | 'LARGE';
  groomingExperience: boolean;
  isBite: boolean;
  dislikeParts: DislikeParts[];
  significantTags: SignificantTags[];
  significant: string;
}

export interface DislikeParts {
  part: string;
  partName: string;
}
export interface SignificantTags {
  tag: string;
  tagName: string;
}
