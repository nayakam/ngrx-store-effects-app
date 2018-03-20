import * as fromPizzas from './pizzas.reducer';

import * as fromTopping from './topping.reducer';

import {ActionReducerMap, createFeatureSelector} from "@ngrx/store";

export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
  toppings: fromTopping.ToppingsState;
}

// Register reducers
//ActionReducerMap is for type checking
export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer,
  toppings: fromTopping.reducer,
};

export const getProductsState = createFeatureSelector<ProductsState>('products');
