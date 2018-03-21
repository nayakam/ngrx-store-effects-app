import {Injectable} from "@angular/core";

import {Actions, Effect} from "@ngrx/effects";
import * as pizzaActions from '../actions/pizzas.action'
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from 'rxjs/observable/of';
import * as fromServices from '../../services';
import {Observable} from "rxjs/Observable";
import {Action} from "@ngrx/store";


@Injectable()
export class PizzasEffect {
  constructor(private  actions$: Actions, private pizzaService: fromServices.PizzasService) {
  }

  @Effect()
  loadPizzas$: Observable<Action> = this.actions$.ofType(pizzaActions.LOAD_PIZZAS).pipe(
    switchMap(() => {
      return this.pizzaService.getPizzas().pipe(
        map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
        catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
      );
    })
  );

  @Effect()
  createPizza$: Observable<Action> = this.actions$.ofType(pizzaActions.LOAD_PIZZAS).pipe(
    map((action: pizzaActions.CreatePizza) => action.payload),
    switchMap(pizza => {
      return this.pizzaService.createPizza(pizza).pipe(
        map(pizza => new pizzaActions.CreatePizzaSuccess(pizza)),
        catchError(error => of(new pizzaActions.CreatePizzaFail(error)))
      );
    })
  );

  @Effect()
  updatePizz$: Observable<Action> = this.actions$.ofType(pizzaActions.UPDATE_PIZZA).pipe(
    map((action: pizzaActions.UpdatePizza) => action.payload),
    switchMap(pizza => {
      return this.pizzaService.updatePizza(pizza).pipe(
        map(pizza => new pizzaActions.UpdatePizzaSuccess(pizza)),
        catchError(error => of(new pizzaActions.UpdatePizzaFail(error)))
      );
    })
  );
}
