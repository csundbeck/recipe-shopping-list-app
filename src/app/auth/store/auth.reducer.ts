import { User } from "../user.model";
import * as AuthActions from "./auth.actions";

export interface IState {
    user: User
}

const initState: IState = {
    user: null,
};

export function authReducer(state = initState, action: AuthActions.AuthActions) {
    switch (action.type) {
        case AuthActions.LOGIN:
        const user = new User(action.payload.email, action.payload.userId, action.payload.token, action.payload.expirationDate)    
        return {
            ...state,
            user: user
        };
        case AuthActions.LOGOUT:
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
}