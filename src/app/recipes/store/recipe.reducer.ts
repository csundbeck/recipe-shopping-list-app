import * as RecipesActions from "./recipe.action";
import { Recipe } from "../recipe.model";

export interface State {
  recipes: Recipe[];
}

const initState: State = {
  recipes: [],
};

export function recipeReducer(
  state = initState,
  action: RecipesActions.RecipesActions,
) {
  switch (action.type) {
    case RecipesActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload],
      };
    default:
      return state;
  }
}
