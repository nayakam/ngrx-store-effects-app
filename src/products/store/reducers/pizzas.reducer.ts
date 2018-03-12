import {Pizza} from "../../models/pizza.model";
import {LOAD_PIZZAS, LOAD_PIZZAS_FAIL, LOAD_PIZZAS_SUCCESS, PizzasAction} from "../actions/pizzas.action";

export interface PizzaState {
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  data: [{
    "name": "Plain Ol' Pepperoni",
    "toppings": [
      {
        "id": 10,
        "name": "pepperoni"
      }
    ],
    "id": 3
  }],
  loaded: false,
  loading: false,
};

export function reducer(state = initialState,
                        action: PizzasAction): PizzaState {

  switch (action.type) {
    case LOAD_PIZZAS: {
      return {
        ...state, loading: true
      };
    }

    case LOAD_PIZZAS_SUCCESS: {
      return {
        ...state, loading: false, loaded: true
      };
    }

    case LOAD_PIZZAS_FAIL: {
      return {
        ...state, loading: false, loaded: false
      };
    }
  }
  return state;
}

export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzas = (state: PizzaState) => state.data;
