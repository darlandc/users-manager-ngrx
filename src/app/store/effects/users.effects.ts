import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsesrService } from 'src/app/shared/services/users.service';
import * as usersActions from '../actions/users.actions';
import { usersTypeActions } from '../../shared/enums/users-type.action';

@Injectable()
export class UsersEffects {

  constructor(private actions$: Actions, private usersService: UsesrService) {}

  loadUsers$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(usersTypeActions.LOAD_USERS),
        exhaustMap(() => this.usersService.getAll()
          .pipe(
            map((payload: any) =>
              usersActions.loadUsersSuccess({ payload }),
              catchError(error => of(usersActions.loadUsersError({ error })))
            )
          )
        )
      )
  );

  loadUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(usersTypeActions.LOAD_USER),
        exhaustMap(() => this.usersService.getAll()
          .pipe(
            map((payload: any) =>
              usersActions.loadUserSuccess({ payload }),
              catchError(error => of(usersActions.loadUserError({ error })))
            )
          )
        )
      )
  );

}
