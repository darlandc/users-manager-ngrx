import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { IUsersState } from "src/app/shared/interfaces/users-state.interface";
import * as usersActions from '../actions/users.actions';

export const initialState: IUsersState = {
  users: [],
  user: null,
  error: ''
};

const _usersReducer = createReducer(
  initialState,
  on(usersActions.loadUsersSuccess, (state: any, { payload }: any) => (
    {
      ...state,
      users: payload,
      error: ''
    }
  )),
  on(usersActions.loadUsersError, (state: any, { error }: any) => (
    {
      ...state,
      users: [],
      error: error
    }
  )),
  on(usersActions.loadUserSuccess, (state: any, { }: any) => (
    {
      ...state,
      user: null,
      error: ''
    }
  )),
  on(usersActions.loadUserError, (state: any, { error }: any) => (
    {
      ...state,
      user: null,
      error: error
    }
  )),
);

export function usersReducer(state = initialState, action: Action) {
  return _usersReducer(state, action);
};

const _getUsersSelector = createFeatureSelector<IUsersState>(
  'users'
);

export const getUsers = createSelector(
  _getUsersSelector,
  (state: IUsersState) => state.users
);

export const getUsersError = createSelector(
  _getUsersSelector,
  (state: IUsersState) => state.error
);

export const getUser = createSelector(
  _getUsersSelector,
  (state: IUsersState) => state.user
);
