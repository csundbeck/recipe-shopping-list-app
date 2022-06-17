import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('Test Recipe','This is a test recipe','https://preppykitchen.com/wp-content/uploads/2019/06/Chocolate-cake-recipe-1200a.jpg', [
            new Ingredient('Milk', 1),
            new Ingredient('Steak', 2)
        ]),
        new Recipe('Test Recipe 2','This is another test recipe','https://preppykitchen.com/wp-content/uploads/2019/06/Chocolate-cake-recipe-1200a.jpg', [
            new Ingredient('Milk', 1),
            new Ingredient('Steak', 2)
        ]),
      ];

      constructor(private shoppingListService: ShoppingListService) {}

      getRecipes() {
        return this.recipes.slice();
      }

      addIngredients(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
      }
}