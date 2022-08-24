
import {GET_LOTS_FAIL,GET_LOTS_REQUEST,GET_LOTS_SUCCESS,ADD_CUSTOMER_LOT,REMOVE_CUSTOMER_LOT,INCREMENT_COUNT_CUSTOMER_LOT,DECREMENT_COUNT_CUSTOMER_LOT,GET_CATEGORIES_FAIL,GET_CATEGORIES_SUCCESS,GET_CATEGORIES_REQUEST} from "./shoppingTypes"

// interface LotsState {
//     lots: any[];
//     isLoading: boolean;
//     error: string;
//     customerLots:any[],
//     totalCount:number,
//   }
// export const initailState:LotsState={
//     lots:[],
//     isLoading:false,
//     error:"",
//     customerLots:[],
//     totalCount:0
// }
interface LotsState {
    lots: any[];
    isLoading: boolean;
    isLoadingCategory: boolean;
    error: string;
    customerLots:any[],
    totalCount:number,
    categories:any[],
  }
export const initailState:LotsState={
    lots:[],
    isLoading:false,
    isLoadingCategory:false,
    error:"",
    customerLots:[],
    totalCount:0,
    categories:[]
}

 export const shoppingReducers=(state:LotsState=initailState,action:any)=>{
    return 0
    //    switch (action.type) {
    //     //  cases to fetch lots from api :
    //        case GET_LOTS_REQUEST:
        
    //            return{...state,isLoading:true}
    //            break;
    //            case GET_LOTS_SUCCESS:
                   
    //             return{...state,lots:action.payload.lots,isLoading:false}
    //             break;
    //             case GET_LOTS_FAIL:
    //                 return{...state,error:action.payload.error,isLoading:false}
    //                 break;
    //                 case GET_CATEGORIES_REQUEST:
    //                     return{...state,isLoadingCategory:true}
    //                     break;
    //                     case GET_CATEGORIES_SUCCESS:
    //                         return{...state,categories:action.payload.categories,isLoadingCategory:false}
    //                         break;
    //                         case GET_CATEGORIES_FAIL:
    //                             return{...state,error:action.payload.error,isLoading:false}
    //                             break;
    //                 case ADD_CUSTOMER_LOT:
                       
    //                     return{...state,customerLots:[...state.customerLots,action.payload.lot],totalCount:state.totalCount+parseInt(action.payload.lot.lotCount)}
    //                     break;
    //                     case REMOVE_CUSTOMER_LOT:
    //                         return{...state,customerLots:state.customerLots.filter((el)=>el.id!=action.payload.id),totalCount:state.totalCount-1}
    //                         break;
    //                         case INCREMENT_COUNT_CUSTOMER_LOT:
    //                             {
                              
    //                             const index=state.customerLots.findIndex((el:any)=>el.id==action.payload.id)
                             
                            
    //                             return{...state,customerLots:[...state.customerLots.slice(0,index),{...state.customerLots[index],lotCount:state.customerLots[index].lotCount+1},...state.customerLots.slice(index+1)],totalCount:state.totalCount+1}
    //                             break;
    //                         }
    //                         case DECREMENT_COUNT_CUSTOMER_LOT:
    //                             {
    //                             const index=state.customerLots.findIndex((el:any)=>el.id==action.payload.id)
    //                             return{...state,customerLots:[...state.customerLots.slice(0,index),{...state.customerLots[index],lotCount:state.customerLots[index].lotCount-1},...state.customerLots.slice(index+1)],totalCount:state.totalCount-1}
    //                             break;
    //                     }
    //        default:
             
    //            return state
    //            break;
    //    }
}