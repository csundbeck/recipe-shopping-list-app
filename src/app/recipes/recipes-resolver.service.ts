import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { Recipe } from './recipe.model';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/app.reducer';
import * as RecipesActions from './store/recipe.action';
import { Actions, ofType } from '@ngrx/effects';
import { take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(private store: Store<IAppState>, private actions$: Actions) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // return this.dataStorageService.fetchRecipes();
    this.store.dispatch(new RecipesActions.FetchRecipes());
    return this.actions$.pipe(ofType(RecipesActions.SET_RECIPES), take(1));
  }
}
