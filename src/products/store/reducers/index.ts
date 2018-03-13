import * as fromPizzas from './pizzas.reducer';

import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";

export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
}

// Register reducers
//ActionReducerMap is for type checking
export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer,
};

export const getProductsState = createFeatureSelector<ProductsState>('products');

// pizza state
export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductsState) => state.pizzas
);

export const getPizzasEntities = createSelector(getPizzaState, fromPizzas.getPizzasEntities);

export const getAllPizzas = createSelector(getPizzasEntities, (entities) => {
  console.log(entities);
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);
export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);

