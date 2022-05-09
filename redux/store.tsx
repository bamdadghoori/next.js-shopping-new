
import  {createStore,applyMiddleware,Dispatch} from "redux";
import thunk,{ThunkDispatch} from "redux-thunk";

import { shoppingReducers } from "./shopping/shoppingReducer";
export const store=createStore(shoppingReducers,applyMiddleware(thunk))
//in yani bebin store.getstate az che no hast va oon no ro beriz to RootState!

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch
// export interface RootState {
//   lots:Array<any>,
//   error:string,
//   isLoading:boolean

//   }