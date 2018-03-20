import *  as fromRouter from '@ngrx/router-store';
import {ActivatedRouteSnapshot, Params, RouterStateSnapshot} from "@angular/router";
import {ActionReducerMap, createFeatureSelector} from "@ngrx/store";

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface State {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer
};

//selector
export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('routerReducer');

//custom serializer
export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    //destructuring the url same as  let url: string = routerState.url
    const {url} = routerState;
    const {queryParams} = routerState.root;
    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      console.log(state.url, state.params);
      state = state.firstChild;
    }
    const {params} = state;
    console.log(url, queryParams, params);
    return {url, queryParams, params} as RouterStateUrl;
  }
}
