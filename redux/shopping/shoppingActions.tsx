import {GET_LOTS_SUCCESS,GET_LOTS_REQUEST,GET_LOTS_FAIL,ADD_CUSTOMER_LOT,DECREMENT_COUNT_CUSTOMER_LOT,REMOVE_CUSTOMER_LOT,INCREMENT_COUNT_CUSTOMER_LOT,GET_CATEGORIES_REQUEST,GET_CATEGORIES_FAIL,GET_CATEGORIES_SUCCESS} from './shoppingTypes';
export const GetLotsRequest=()=>{
    return {
         type:GET_LOTS_REQUEST
    }
}
export const GetLotsSuccess=(lots:Array<any>)=>{
   
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

export const GetCategoriesRequest=()=>{
    return {
         type:GET_CATEGORIES_REQUEST
    }
}
export const GetCategoriesSuccess=(categories:Array<any>)=>{
   
    return {
         type:GET_CATEGORIES_SUCCESS,
         payload:{categories:categories},
    }
}
export const GetCategoriesFail=(error:string)=>{
    return {
         type:GET_CATEGORIES_FAIL,
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
         type:REMOVE_CUSTOMER_LOT,
         payload:{id:id}
    }
}
export const IncrementCountCustomerLot=(id:number)=>{
return{
    type:INCREMENT_COUNT_CUSTOMER_LOT,
    payload:{id:id}
}
}
export const DecrementCountCustomerLot=(id:number)=>{
    return{
        type:DECREMENT_COUNT_CUSTOMER_LOT,
        payload:{id:id}
    }
    }