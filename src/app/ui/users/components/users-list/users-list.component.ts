import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/ui/store/app.state';
import { selectListUsers } from 'src/app/ui/store/users/selectors/users.selector';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  
  users$: Observable<any> = new Observable();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.users$ = this.store.select(selectListUsers);
  }

}
