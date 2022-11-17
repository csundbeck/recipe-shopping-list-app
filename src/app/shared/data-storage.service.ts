import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map, tap } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class DataStorgageService {
    constructor(private http: HttpClient, private recipesService: RecipeService) {}

    storeRecipes() {
        const recipes = this.recipesService.getRecipes();
        this.http.put('https://ng-recipe-book-ff44c-default-rtdb.firebaseio.com/recipes.json', recipes)
            .subscribe(res => {
                console.log(res)
            });
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>('https://ng-recipe-book-ff44c-default-rtdb.firebaseio.com/recipes.json')
        .pipe(map(res => {
            return res.map(recipe => {
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
            });
        }), tap(res => {
            this.recipesService.setRecipes(res)
        })
        )    
    }
}