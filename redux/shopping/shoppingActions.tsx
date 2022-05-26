import {GET_LOTS_SUCCESS,GET_LOTS_REQUEST,GET_LOTS_FAIL,ADD_CUSTOMER_LOT,REMOVE_CUSTOMER_LOT} from './shoppingTypes';
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

export const AddCustomerLot=(lot:object)=>{
    return {
         type:ADD_CUSTOMER_LOT,
         payload:{lot:lot}
    }
}
export const RemoveCustomerLot=(id:number)=>{
    return {
         type:ADD_CUSTOMER_LOT,
         payload:{id:id}
    }
}