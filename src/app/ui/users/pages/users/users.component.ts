import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/ui/store/app.state';
import { findUser, loadUsers } from 'src/app/ui/store/users/actions/users-list.actions';
import { selectLoading } from 'src/app/ui/store/users/selectors/users.selector';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  loading$: Observable<boolean> = new Observable();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(loadUsers());
  }

  buscaUsuario() {
    this.store.dispatch(findUser({id: 3521}));
  }

  buscarTodos() {
    this.store.dispatch(loadUsers());
  }
}
