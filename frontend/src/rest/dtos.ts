export enum Gender {
  MALE,
  FEMAILE,
  OTHER,
}

export interface User {
  id?: string;
  name: string;
  gender: Gender;
  email: string;
  status: boolean;
}
