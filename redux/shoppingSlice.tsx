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
    categories:[],
    users:[]
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
          removeFromCustomerLots(state:any,action:any){
            const id=action.payload;
            const newCustomerLots=state.customerLots.filter((el:any)=>el.id!=id)
                     return {...state,customerLots:newCustomerLots}
         },
         
         decrementCountofCustomerLot(state:any,action:any){
            const lot=action.payload
            const newLot={...lot,count:lot.count-1}
            //to find which lot should be changed
            const index=state.customerLots.findIndex((el:any)=>el.id==lot.id)
            let newCustomerLots
            if(index==0){
                newCustomerLots=[newLot,...state.customerLots.slice(1,state.customerLots.length)]
                console.log("x")
            }
            else{
                newCustomerLots=[...state.customerLots.slice(0,index),newLot,...state.customerLots.slice(index+1,state.customerLots.length)]
            }
          
            console.log(newCustomerLots)
            return {...state,customerLots:newCustomerLots}
         },
          incrementCountofCustomerLot(state:any,action:any){
            const lot=action.payload
            const newLot={...lot,count:lot.count+1}
            //to find which lot should be changed
            console.log(lot)
            console.log(state.customerLots)
            const index=state.customerLots.findIndex((el:any)=>el.id==lot.id)
            let newCustomerLots
            console.log(index)
            if(index==0){
                newCustomerLots=[newLot,...state.customerLots.slice(1,state.customerLots.length)]
            }
            else{
                newCustomerLots=[...state.customerLots.slice(0,index),newLot,...state.customerLots.slice(index+1,state.customerLots.length)]
            }
            
            console.log(newCustomerLots)
            return {...state,customerLots:newCustomerLots}
         },
         //to change count of customerLot
         changeCountOfCustomerLot(state:any,action:any){
            const newLot=action.payload
           
            //to find which lot should be changed
            console.log(newLot)
            console.log(state.customerLots)
            const index=state.customerLots.findIndex((el:any)=>el.id==newLot.id)
            let newCustomerLots
            console.log(index)
            if(index==0){
                newCustomerLots=[newLot,...state.customerLots.slice(1,state.customerLots.length)]
            }
            else{
                newCustomerLots=[...state.customerLots.slice(0,index),newLot,...state.customerLots.slice(index+1,state.customerLots.length)]
            }
            
            console.log(newCustomerLots)
            return {...state,customerLots:newCustomerLots}
         },

         //to add user
         addUser(state:any,action:any){
            const newUser=action.payload
            const newUsers=[...state.users,newUser]
            return {...state,users:newUsers}
         }
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
   
export const{ addToCustomerLots:addToCustomerLotsAction,removeFromCustomerLots:removeFromCustomerLotsAction,decrementCountofCustomerLot:decrementCountofCustomerLotAction,incrementCountofCustomerLot:incrementCountofCustomerLotAction,changeCountOfCustomerLot:changeCountOfCustomerLotAction,addUser:addUserAction }=shoppingSlice.actions
   export default shoppingSlice.reducer
