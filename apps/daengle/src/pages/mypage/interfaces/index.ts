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
  partName: string;
  part: string;
}
export interface SignificantTags {
  tagName: string;
  tag: string;
}

export type SignificantTag = 'SKIN_DISEASES' | 'HEART_DISEASE' | 'MARKING' | 'MOUNTING';
export type DislikePart =
  | 'NONE'
  | 'EYE'
  | 'NOSE'
  | 'MOUTH'
  | 'EAT'
  | 'NECK'
  | 'BODY'
  | 'LEG'
  | 'TAIL'
  | 'GENITAL';
