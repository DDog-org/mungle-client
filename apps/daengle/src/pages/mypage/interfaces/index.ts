export interface PetProfileEditType {
  id: number;
  image: string;
  name: string;
  birth: number;
  gender: 'MALE' | 'FEMALE';
  breed: string;
  isNeutered: string;
  weight: 'SMALL' | 'MEDIUM' | 'LARGE';
  groomingExperience: string;
  isBite: string;
  dislikeParts: DislikeParts[];
  significantTags: SignificantTags[];
  significants: string;
}

export interface DislikeParts {
  partName: DislikePart[];
  part: string;
}
export interface SignificantTags {
  tagName: SignificantTag;
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
