import { ActionReducerMap } from "@ngrx/store";
import { usersState } from "src/app/domain/models/states/user.state";
import { usersReducer } from "./users/reducers/users.reducer";
export interface AppState {
    users: usersState
}
export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    users: usersReducer
};
