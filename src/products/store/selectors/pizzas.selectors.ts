import {createSelector} from "@ngrx/store";

import * as fromRoot from "../../../app/store";
import * as fromFeature from "../reducers";
import * as fromPizzas from "../reducers/pizzas.reducer";
import * as fromToppingsSelectors from "./toppings.selectors";
import {Pizza} from "../../models/pizza.model";

export const getPizzaState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.pizzas
);

export const getPizzasEntities = createSelector(getPizzaState, fromPizzas.getPizzasEntities);


export const getSelectedPizzas = createSelector(getPizzasEntities, fromRoot.getRouterState,
  (entities, router): Pizza => {
    return router.state && entities[router.state.params.pizzaId];
  });

export const getPizzaVisualised = createSelector(
  getSelectedPizzas,
  fromToppingsSelectors.getToppingsEntities,
  fromToppingsSelectors.getSelectedToppings,
  (pizza, toppingEntities, selectedToppings) => {
    console.log(pizza);
    console.log(toppingEntities);
    console.log(selectedToppings);
    const toppings = selectedToppings.map(id => toppingEntities[id]);
    return {...pizza, toppings};
  }
);

export const getAllPizzas = createSelector(getPizzasEntities, (entities) => {
  console.log(entities);
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);
export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);

