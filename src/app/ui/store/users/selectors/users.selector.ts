import { createSelector } from '@ngrx/store';
import { usersState } from 'src/app/domain/models/states/user.state';
import { AppState } from '../../app.state';
export const selectUsersFeature = (state: AppState) => state.users;
 
export const selectListUsers = createSelector(
    selectUsersFeature,
    (state: usersState) => state.users
);

export const selectLoading = createSelector(
    selectUsersFeature,
    (state: usersState) => state.loading
);