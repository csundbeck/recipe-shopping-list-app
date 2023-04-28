import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from "./shooping-list.actions";

const initState = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ]
}

export function shoppingListReducer(state = initState, action: ShoppingListActions.ShoppingListActionTypes) {
    switch(action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                Ingredients: [
                    ...state.ingredients,
                    action.payload,
                ]
            }
            case ShoppingListActions.ADD_INGREDIENTS:
                return {
                    ...state,
                    Ingredients: [
                        ...state.ingredients,
                        ...action.payload,
                    ]
                }
            default:
                return state;
    }
}

