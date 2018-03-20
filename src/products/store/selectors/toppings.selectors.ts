import {createSelector} from "@ngrx/store";
import * as fromFeature from "../reducers";
import * as fromToppings from "../reducers/topping.reducer";

export const getToppingsState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.toppings
);

export const getToppingsEntities = createSelector(
  getToppingsState,
  fromToppings.getToppingEntities
);

export const getAllToppings = createSelector(
  getToppingsEntities,
  entities => {
    console.log(entities);
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  });

export const getToppingsLoaded = createSelector(
  getToppingsState,
  fromToppings.getToppingLoaded
);

export const getToppingsLoading = createSelector(
  getToppingsState,
  fromToppings.getToppingLoading
);
