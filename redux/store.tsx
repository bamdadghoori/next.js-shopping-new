
import  {createStore,applyMiddleware,Dispatch} from "redux";
import thunk,{ThunkDispatch} from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import { shoppingReducers } from "./shopping/shoppingReducer";
// export const store=createStore(shoppingReducers,applyMiddleware(thunk))
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'root',
    storage,
  }
//in yani bebin store.getstate az che no hast va oon no ro beriz to RootState!

const persistedReducer  = persistReducer(persistConfig, shoppingReducers)

// export interface RootState {
//   lots:Array<any>,
//   error:string,
//   isLoading:boolean

//   }
export let store = createStore(persistedReducer,applyMiddleware(thunk))
export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch

    
     export let persistor = persistStore(store)
   
 
