import { createAction, props } from "@ngrx/store";
import { IUser } from "src/app/shared/interfaces/user.interface";
import { usersTypeActions } from "../../shared/enums/users-type.action";

export const loadUsers = createAction(
  usersTypeActions.LOAD_USERS
)

export const loadUsersError = createAction(
  usersTypeActions.LOAD_USERS_ERROR,
  props<{ error: string }>()
)

export const loadUsersSuccess = createAction(
  usersTypeActions.LOAD_USERS_SUCCESS,
  props<{ payload: IUser[] }>()
)

export const loadUser = createAction(
  usersTypeActions.LOAD_USER
)

export const loadUserError = createAction(
  usersTypeActions.LOAD_USER_ERROR,
  props<{ error: string }>()
)

export const loadUserSuccess = createAction(
  usersTypeActions.LOAD_USER_SUCCESS,
  props<{ payload: IUser[] }>()
)

export const addUser = createAction(
  usersTypeActions.ADD_USER
)

export const addUserError = createAction(
  usersTypeActions.ADD_USER_ERROR,
  props<{ error: string }>()
)

export const addUserSuccess = createAction(
  usersTypeActions.ADD_USER_SUCCESS,
  props<{ payload: IUser[] }>()
)

export const deleteUser = createAction(
  usersTypeActions.DELETE_USER
)

export const deleteUserError = createAction(
  usersTypeActions.DELETE_USER_ERROR,
  props<{ error: string }>()
)

export const deleteUserSuccess = createAction(
  usersTypeActions.DELETE_USER_SUCCESS,
  props<{ payload: IUser[] }>()
)

export const updateUser = createAction(
  usersTypeActions.UPDATE_USER
)

export const updateUserError = createAction(
  usersTypeActions.UPDATE_USER_ERROR,
  props<{ error: string }>()
)

export const updateUserSuccess = createAction(
  usersTypeActions.UPDATE_USER_SUCCESS,
  props<{ payload: IUser[] }>()
)

