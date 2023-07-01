export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

export interface User {
  id?: string;
  name: string;
  gender: Gender;
  email: string;
  status: boolean;
}
