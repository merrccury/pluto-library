import { Source, UserType } from '../../../enums';

export interface IAdd {
  username: string;
  password: string;
  type: UserType;
  source: Source;
}
