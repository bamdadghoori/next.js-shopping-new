//@ts-ignore
import { createSlice } from '@reduxjs/toolkit'
const initialState={value:0}
const increment=(state:any)=>{
    console.log(`x`)
    state.value+=1;
}
const counterSlice=createSlice({
    name:'counter',
      initialState:initialState,
      reducers:{
        increment
      }
})
export const{ increment:incrementAction }=counterSlice.actions
export {counterSlice}
export default counterSlice.reducer