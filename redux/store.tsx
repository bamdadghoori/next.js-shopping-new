
import  {createStore,applyMiddleware,Dispatch} from "redux";
//@ts-ignore
import { configureStore } from '@reduxjs/toolkit'

import counterSlice from './CounterSlice'
import shoppingSlice from './shoppingSlice'
import thunk,{ThunkDispatch} from "redux-thunk";
// import { persistStore, persistReducer } from 'redux-persist'
import { shoppingReducers } from "./shopping/shoppingReducer";
import {
  persistStore,
  persistReducer,
} from 'redux-persist'
// export const store=createStore(shoppingReducers,applyMiddleware(thunk))
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'root',
    storage,
  }
//in yani bebin store.getstate az che no hast va oon no ro beriz to RootState!

const persistedReducer  = persistReducer(persistConfig, shoppingSlice)

// export interface RootState {
//   lots:Array<any>,
//   error:string,
//   isLoading:boolean

//   }
export const store = configureStore({
  reducer: {
   counterSlice,
     persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})
// export let store = createStore(persistedReducer,applyMiddleware(thunk))
export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch


     export let persistor = persistStore(store)
   
 
