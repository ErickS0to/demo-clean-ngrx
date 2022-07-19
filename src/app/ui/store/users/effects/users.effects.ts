import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { UserUseCases } from 'src/app/domain/usecase/user-use-case';

@Injectable()
export class usersEffects {

    loadUsers$ = createEffect(() => this.actions$.pipe(  
        ofType('[User List] Load users'),
        mergeMap(() => this._userUseCase.getAll()
        .pipe(
            map(users => ({type: '[User List] Loaded users success', users}))
        ))
    ));

    findUser$ = createEffect(() => this.actions$.pipe(
        ofType('[User List] Find user'),
        mergeMap((action) => this._userUseCase.getUser( action['id'] )
        .pipe(
            map(users => ({type: '[User List] Loaded users success', users}))
        ))
    ));

    constructor(private actions$: Actions, private _userUseCase : UserUseCases){

    }
}