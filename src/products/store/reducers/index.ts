import * as fromPizzas from './pizzas.reducer';

import {ActionReducerMap, createFeatureSelector} from "@ngrx/store";

export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
}

// Register reducers
//ActionReducerMap is for type checking
export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer,
};

export const getProductsState = createFeatureSelector<ProductsState>('products');
