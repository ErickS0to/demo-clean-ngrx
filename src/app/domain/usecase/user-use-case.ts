import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserGateway } from '../models/user/gateway/user-gateway';
import { User } from '../models/user/user';

@Injectable({
  providedIn: 'root'
})

export class UserUseCases {
  constructor( private _userGateWay: UserGateway) {}  
  getAll () : Observable <Array<User>> {
    return this._userGateWay.getAll();
  }
}