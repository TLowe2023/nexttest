import { GoRestUser } from 'src/integrations/goRest/goRest.types';
import { User } from 'src/controllers/user/user.model';
import { stringToGender } from 'src/database/database.transformer';

export function goRestUserToUser(goRestUser: GoRestUser): User {
  return {
    id: `${goRestUser.id}`,
    name: goRestUser.name,
    email: goRestUser.email,
    gender: stringToGender(goRestUser.gender),
    status: goRestUser.status === 'active',
  } as User;
}
