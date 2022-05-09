// import { GetLotsFail,GetLotsRequest,GetLotsSuccess } from "./shoppingActions"
import {GET_LOTS_FAIL,GET_LOTS_REQUEST,GET_LOTS_SUCCESS} from "./shoppingTypes"

interface LotsState {
    lots: any[];
    isLoading: boolean;
    error: string;
  }
export const initailState:LotsState={
    lots:[],
    isLoading:false,
    error:""
}

 export const shoppingReducers=(state:LotsState=initailState,action:any):LotsState=>{
       switch (action.type) {
        //  cases to fetch lots from api :
           case GET_LOTS_REQUEST:
            {console.log("x")}
               return{...state,isLoading:true}
               break;
               case GET_LOTS_SUCCESS:
                   {console.log("x")}
                return{...state,lots:action.payload.lots,isLoading:false}
                break;
                case GET_LOTS_FAIL:
                    return{...state,error:action.payload.error,isLoading:false}
                    break;
       
           default:
               {console.log("y")}
               return state
               break;
       }
}