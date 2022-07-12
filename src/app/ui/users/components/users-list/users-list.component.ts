import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserUseCases } from 'src/app/domain/usecase/user-use-case';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  
  users: any[]= [];

  constructor(private _userUseCase : UserUseCases) { }

  ngOnInit(): void {
    this._userUseCase.getAll().subscribe(response => {
      this.users = response;
    })
  }

}
