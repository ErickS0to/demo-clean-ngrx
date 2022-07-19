import { User } from "../user/user";

export interface usersState {
    loading: boolean,
    users: ReadonlyArray<User>
    
}