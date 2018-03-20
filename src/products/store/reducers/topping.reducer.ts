import {Topping} from "../../models/topping.model";
import * as fromTopping from "../actions/toppings.actions"


export interface ToppingsState {
  entities: { [id: number]: Topping };
  loaded: boolean;
  loading: boolean;
}

export const initialState: ToppingsState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(state = initialState,
                        action: fromTopping.ToppingActions): ToppingsState {

  switch (action.type) {
    case fromTopping.LOAD_TOPPINGS: {
      return {
        ...state, loading: true
      };
    }

    case fromTopping.LOAD_TOPPINGS_SUCCESS: {
      const toppings = action.payload;
      console.log(toppings);
      const entities = toppings.reduce((entities: { [id: number]: Topping }, toppings: Topping) => {
          return {
            ...entities,
            [toppings.id]: toppings
          };
        },
        {...state.entities});
      return {
        ...state, loading: false, loaded: true, entities,
      };
    }

    case fromTopping.LOAD_TOPPINGS_FAIL: {
      return {
        ...state, loading: false, loaded: false
      };
    }
  }
  return state;
}

export const getToppingLoading = (state: ToppingsState) => state.loading;
export const getToppingLoaded = (state: ToppingsState) => state.loaded;
export const getToppingEntities = (state: ToppingsState) => state.entities;
