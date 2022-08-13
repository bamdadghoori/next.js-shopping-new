import {useSelector,useDispatch} from 'react-redux'
import {RootState,AppDispatch} from '../../redux/store'
import {useState,useEffect} from 'react'
import {incrementAction} from '../../redux/CounterSlice'
import { getShoppingLots } from '../../redux/shoppingSlice'
import Incrementor from './incrementor'

const Test=()=>{

    const dispatch:AppDispatch=useDispatch()
    const value=useSelector((state:RootState)=>state.counterSlice.value)
    useEffect(()=>{
      
        dispatch(getShoppingLots
            ())
      },[])
   const val=useState(0)
    return(<>
    
     <Incrementor/>
    <button onClick={()=>dispatch((incrementAction()))}>+</button>
    </>)
}
export default Test;