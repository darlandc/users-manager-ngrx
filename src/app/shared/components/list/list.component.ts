import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUser } from '../../interfaces/user.interface';
import { UsesrService } from '../../services/users.service';
import * as userActions from '../../../store/actions/users.actions';
import { IAppState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';
import * as userSelectors from '../../../store/reducers/users.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list: IUser[]=[];
  listing$: Observable<any> = this.store.select(userSelectors.getUsers);

  constructor(
    private store: Store<IAppState>){}

  ngOnInit(): void {
    this.store.dispatch(
      userActions.loadUsers()
    )
  }
}
