import { Observable } from 'rxjs';
import { User } from '../user';

export abstract class UserGateway {
    abstract getAll(): Observable<Array<User>>;
} 