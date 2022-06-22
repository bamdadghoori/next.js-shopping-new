// import { GetLotsFail,GetLotsRequest,GetLotsSuccess } from "./shoppingActions"
import {GET_LOTS_FAIL,GET_LOTS_REQUEST,GET_LOTS_SUCCESS,ADD_CUSTOMER_LOT,REMOVE_CUSTOMER_LOT,INCREMENT_COUNT_CUSTOMER_LOT,DECREMENT_COUNT_CUSTOMER_LOT} from "./shoppingTypes"

interface LotsState {
    lots: any[];
    isLoading: boolean;
    error: string;
    customerLots:any[],
    totalCount:number,
  }
export const initailState:LotsState={
    lots:[],
    isLoading:false,
    error:"",
    customerLots:[],
    totalCount:0
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
                    case ADD_CUSTOMER_LOT:
                       
                        return{...state,customerLots:[...state.customerLots,action.payload.lot],totalCount:state.totalCount+parseInt(action.payload.lot.lotCount)}
                        break;
                        case REMOVE_CUSTOMER_LOT:
                            return{...state,customerLots:state.customerLots.filter((el)=>el.id!=action.payload.id),totalCount:state.totalCount-1}
                            break;
                            case INCREMENT_COUNT_CUSTOMER_LOT:
                                {
                                // const currentValue=state.customerLots.filter((el:any)=>el.id==action.payload.id)
                                // console.log(currentValue)
                                // console.log(currentValue[0])
                                const index=state.customerLots.findIndex((el:any)=>el.id==action.payload.id)
                             
                                {console.log( {...state.customerLots[index],lotCount:state.customerLots[index].lotCount+1})}
                                   
                                {console.log([...state.customerLots.slice(index+1)])}
                                {console.log([...state.customerLots.slice(0,index)])}
                                console.log([...state.customerLots.slice(0,index),{...state.customerLots[index],lotCount:state.customerLots[index].lotCount+1},...state.customerLots.slice(index+1)])
                                return{...state,customerLots:[...state.customerLots.slice(0,index),{...state.customerLots[index],lotCount:state.customerLots[index].lotCount+1},...state.customerLots.slice(index+1)],totalCount:state.totalCount+1}
                                break;
                            }
                            case DECREMENT_COUNT_CUSTOMER_LOT:
                                {console.log("x")
                                const index=state.customerLots.findIndex((el:any)=>el.id==action.payload.id)
                                return{...state,customerLots:[...state.customerLots.slice(0,index),{...state.customerLots[index],lotCount:state.customerLots[index].lotCount-1},...state.customerLots.slice(index+1)],totalCount:state.totalCount-1}
                                break;
                        }
           default:
               {console.log("y")}
               return state
               break;
       }
}