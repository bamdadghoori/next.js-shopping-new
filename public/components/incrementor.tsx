import {useSelector,useDispatch} from 'react-redux'
import {RootState,AppDispatch} from '../../redux/store'
import {useState} from 'react'
import {incrementAction} from '../../redux/CounterSlice'
const Incrementor=()=>{
   
    const value=useSelector((state:RootState)=>state.counterSlice.value)
  
    return(<>
    <div>{value}</div>
    
    
    </>)
}
export default Incrementor