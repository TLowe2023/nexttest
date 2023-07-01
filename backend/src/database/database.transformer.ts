import { DataMap } from 'src/common/util.types';
import { Gender, User } from 'src/controllers/user/user.model';

export function stringToGender(gender: string): Gender {
  switch (gender) {
    case 'male':
      return Gender.MALE;
    case 'female':
      return Gender.FEMALE;
    default:
      return Gender.OTHER;
  }
}

export function genderToString(gender: Gender): string {
  switch (gender) {
    case Gender.MALE:
      return 'male';
    case Gender.FEMALE:
      return 'female';
    default:
      return 'other';
  }
}

export function userToModel(user?: Partial<User> | null): DataMap<any> {
  return {
    ...(user ?? {}),
    gender: genderToString(user.gender),
  };
}

export function modelToUser(model?: DataMap<any> | null): User {
  if (!model) {
    return null;
  }

  return {
    ...model,
    gender: stringToGender(model.gender),
  } as User;
}
