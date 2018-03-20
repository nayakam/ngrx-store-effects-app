import {createSelector} from "@ngrx/store";
import * as fromFeature from "../reducers";
import * as fromToppingsReducer from "../reducers/topping.reducer";

export const getToppingsState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.toppings
);

export const getToppingsEntities = createSelector(
  getToppingsState,
  fromToppingsReducer.getToppingEntities
);

export const getSelectedToppings = createSelector(
  getToppingsState,
  fromToppingsReducer.getSelectedToppings
);

export const getAllToppings = createSelector(
  getToppingsEntities,
  entities => {
    console.log(entities);
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  });

export const getToppingsLoaded = createSelector(
  getToppingsState,
  fromToppingsReducer.getToppingLoaded
);

export const getToppingsLoading = createSelector(
  getToppingsState,
  fromToppingsReducer.getToppingLoading
);
