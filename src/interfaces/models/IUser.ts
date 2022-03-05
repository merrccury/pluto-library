import { Source, UserType } from '../../enums';

export interface IUser {
  password: string;
  username: string;
  email: string;
  userType: UserType;
  source: Source;
}
