import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserGateway } from 'src/app/domain/models/user/gateway/user-gateway';
import { User } from 'src/app/domain/models/user/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService extends UserGateway {
  constructor(private http: HttpClient) { super(); }
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.url}users`)
    .pipe(
      map((users: User[]) =>{ return users})
    )
  }
}
