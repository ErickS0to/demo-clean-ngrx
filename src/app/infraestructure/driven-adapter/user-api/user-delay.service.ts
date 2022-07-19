import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { UserGateway } from 'src/app/domain/models/user/gateway/user-gateway';
import { User } from 'src/app/domain/models/user/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDelayService extends UserGateway {
  getUserPagging(currentPage: number, size: number): Observable<User[]> {
    throw new Error('Method not implemented.');
  }
  getUser(id: number): Observable<User[]> {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) { super(); }
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.url}users`)
    .pipe(
      map((users: User[]) =>{ return users}),
      delay(5000)
    )
  }
}
