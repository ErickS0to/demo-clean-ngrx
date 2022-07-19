import { createReducer, on } from '@ngrx/store';
import { usersState } from 'src/app/domain/models/states/user.state';
import { findUser, loadedUsers, loadUsers } from '../actions/users-list.actions';

export const initialState:  usersState  = { loading: false, users: [] }


export const usersReducer = createReducer (
    initialState, 
    on(loadUsers,  (state) => {
        return {...state, loading: true }
    }),
    on(loadedUsers,  (state, { users }) => {
        return {...state, loading: false , users }
    }),
    on(findUser, (state) => {
        return {...state, loading: true, users: []}
    })
);
