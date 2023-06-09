import { Actions, ofType, Effect } from "@ngrx/effects";
import * as AuthActions from './auth.actions'
import { catchError, map, switchMap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { AuthResponseData } from "../auth.service";
import { environment } from "src/environments/environment";
import { of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthEffects {
    @Effect()
    authLogin = this.actions$.pipe(
        ofType(AuthActions.LOGIN_START),
        switchMap((authData: AuthActions.LoginStart) => {
            return this.http
            .post<AuthResponseData>(
                'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + environment.firebaseAPIKey,
                {
                email: authData.payload.email,
                password: authData.payload.password,
                returnSecureToken: true
                }
            ).pipe(
                map(res => {
                const expirationDate = new Date(new Date().getTime() + +res.expiresIn * 1000);
                return of(new AuthActions.Login({email: res.email, userId: res.localId, token: res.idToken, expirationDate: expirationDate}));
            }), catchError(error => {
                console.error(error);
                return of();
            }))
        }),
    );

    constructor(private actions$: Actions, private http: HttpClient) {}
}