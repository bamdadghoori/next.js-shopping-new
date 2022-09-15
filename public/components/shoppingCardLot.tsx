import React from 'react'
import {useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import {RootState} from "../../redux/store"
import { useDispatch } from 'react-redux'
import { removeFromCustomerLotsAction,decrementCountofCustomerLotAction,incrementCountofCustomerLotAction,changeCountOfCustomerLotAction } from '../../redux/shoppingSlice'
 const ShoppingCardLot = ({lot,changeRefresh,removeItem}:{lot:any,changeRefresh:(...args:any[])=>void,removeItem:(...args:any[])=>any}) => {

    
    const dispatch=useDispatch();

    
    console.log(lot)
    let lots=useSelector((state:RootState)=>state.persistedReducer.lots)
    const [lotState,setLotState]:any[]=useState(lot)
    useEffect(()=>{
              setLotState(lot)
    },[lot])
    console.log(lotState)
       //to increment count of one lot
       const increment=(lot:any)=>{
        console.log(lots)
        const inventory=lots.filter((el:any)=>el.id==lot.id)[0].inventory
        console.log(inventory)
        // const newLot={...lot,count:lotState.count+1}
        if(lot.count<inventory){
           
            dispatch(incrementCountofCustomerLotAction(lotState))
         
        }
    }
    //to decrement count of one lot
    const decrement=(lot:any)=>{
        
      if(lot.count>1){
        dispatch(decrementCountofCustomerLotAction(lotState))
      }
     
      
  }
  //to make count input controlled
  const handleCountInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const newCount=parseInt(e.currentTarget.value);
    const inventory=lots.filter((el:any)=>el.id==lot.id)[0].inventory
    const newLot={...lot,count:newCount}
    
    if(newCount<=inventory && newCount>=1){
        setLotState(newLot)
      dispatch(changeCountOfCustomerLotAction(newLot))
    } 
    
  }


  return (
    <li key={lotState.id}>
    <a href="product-left-sidebar.html" className="sidekka_pro_img"><img src={lotState.imgUrl}alt="product"/></a>
    <div className="ec-pro-content">
        <a href="product-left-sidebar.html" className="cart_pro_title">{lotState.title}</a>
        <span className="cart-price"><span>{lotState.price}</span> x {lotState.count}</span>
        <div className="qty-plus-minus">
        <div className="dec ec_qtybtn" onClick={()=>decrement(lotState)}>-</div>
            <input className="qty-input" type="number" onChange={(e)=>handleCountInputChange(e)} name="ec_qtybtn" value={lotState.count} />
            <div className="inc ec_qtybtn" onClick={()=>increment(lotState)}>+</div>
        </div>
        <a href="#" onClick={()=>removeItem(lot.id)} className="remove">×</a>
    </div>
</li>
  )
}
export default ShoppingCardLot
