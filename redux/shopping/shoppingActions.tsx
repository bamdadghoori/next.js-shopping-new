import {GET_LOTS_SUCCESS,GET_LOTS_REQUEST,GET_LOTS_FAIL} from './shoppingTypes';
export const GetLotsRequest=()=>{
    return {
         type:GET_LOTS_REQUEST
    }
}
export const GetLotsSuccess=(lots:Array<any>)=>{
    console.log("g")
    return {
         type:GET_LOTS_SUCCESS,
         payload:{lots:lots},
    }
}
export const GetLotsFail=(error:string)=>{
    return {
         type:GET_LOTS_FAIL,
         payload:{error:error}
    }
}
