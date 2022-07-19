import { Observable } from 'rxjs';
import { User } from '../user';

export abstract class UserGateway {
    abstract getAll(): Observable<Array<User>>;
    abstract getUser(id: number): Observable<Array<User>>
    abstract getUserPagging(currentPage: number, size: number): Observable<Array<User>>
} 