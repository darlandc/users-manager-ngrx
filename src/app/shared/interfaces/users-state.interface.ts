import { IUser } from "./user.interface";

export interface IUsersState {
  users: IUser[] | null;
  user: IUser | null ;
  error: string | ''
}
