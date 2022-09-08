import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {getLots,getCategories} from '../utils/manualData'
 export const getShoppingLots=createAsyncThunk(`lots/requestStatus`,async()=>{
    console.log("x")
  try{
    
        const response:any=await getLots();
        const data=response
       
        return data;
  }
  catch(er){
    console.log(er)
  }
  
  

})
 export const getShoppingCategories=createAsyncThunk(`categories/requestStatus`,async()=>{
    console.log("x")
    try{
      
          const response:any=await getCategories();
          const data=response
         
          return data;
    }
    catch(er){
      console.log(er)
    }
    
 })


const initialState={
    lots:[],
    isLoading:false,
    isLoadingCategory:false,
    error:"",
    customerLots:[],
    totalCount:0,
    categories:[]
}

 //to add to customerLots (ordered by customer)
//  export const  addToCustomerLots=(state:any,action:any)=>{
//     const newCustomerLots=[...state.customerLots,action.payload]
//         return {...state,customerLots:newCustomerLots}
//           console.log(newCustomerLots)


//  }

const shoppingSlice=createSlice({
    name:'shopping',
   initialState:initialState,
   reducers: {
    // fill in primary logic here
    addToCustomerLots(state:any,action:any){
            const newCustomerLots=[...state.customerLots,action.payload]
            console.log(newCustomerLots)
                return {...state,customerLots:newCustomerLots}
                
         },
  },
   extraReducers:(builder)=>{
    // builder.addCase(addToCustomerLots,(state,action)=>{

    // })
    builder.addCase(getShoppingLots.fulfilled,(state,action)=>{
        console.log('y')
        state.lots=action.payload;
        state.isLoading=false;
        
    }),
    builder.addCase(getShoppingLots.pending,(state,action)=>{
        console.log('y')
        state.isLoading=true;
        
    }),
    builder.addCase(getShoppingLots.rejected,(state,action:any)=>{
        // state.error=action.payload.toString();
        state.isLoading=false;
        state.lots=[];
    }),
    builder.addCase(getShoppingCategories.fulfilled,(state,action)=>{
        console.log('y')
        state.categories=action.payload;
        state.isLoadingCategory=false;
    }),
    builder.addCase(getShoppingCategories.pending,(state,action)=>{
        state.isLoadingCategory=true
    }),
    builder.addCase(getShoppingCategories.rejected,(state,action:any)=>{
        // state.error=action.payload.toString();
        state.isLoadingCategory=false;
        state.categories=[];
    })
}
})
   
export const{ addToCustomerLots:addToCustomerLotsAction }=shoppingSlice.actions
   export default shoppingSlice.reducer
