
import { ActionReducerMap } from "@ngrx/store";
import { IUsersState } from "../shared/interfaces/users-state.interface";
import { UsersEffects } from "./effects/users.effects";
import { usersReducer } from "./reducers/users.reducer";

export interface IAppState {
  users: IUsersState
}

export const appReducer: ActionReducerMap<IAppState> = {
  users: usersReducer
}

export const appEffects = [
  UsersEffects
]
