import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/domain/models/user/user';

export const loadUsers = createAction(
  '[User List] Load users'
);

export const loadedUsers = createAction(
    '[User List] Loaded users success',
    props<{ users: User[] }>()
);

export const findUser = createAction(
  '[User List] Find user' ,
  props<{ id: number }>()
)
