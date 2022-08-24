import React from 'react'
import { useState,useEffect } from 'react'
import ModalCount from './modalCount'
import { useSelector } from 'react-redux'
import {RootState} from "../../redux/store"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import AppContext from './context'
import { IncrementCountCustomerLot,DecrementCountCustomerLot,RemoveCustomerLot } from '../../redux/shopping/shoppingActions'
import { useDispatch } from 'react-redux'

const ShoppingCardModal = ({closeModal}:{closeModal:(...args:any[])=>void}) => {
//@ts-ignore
 const {loggedIn}=useContext(AppContext);
  const dispatch=useDispatch();
    const [showError,setShowError]=useState(false)
    const [showSuccess,setShowSuccess]=useState(false)
   
    // let lots=useSelector((state:RootState)=>state.lots)
    // let customerLots=useSelector((state:RootState)=>state.customerLots)
 
    
    const increment=(lotCount:number,inventory:number,lotId:number)=>{
      if(lotCount<=inventory){
          dispatch(IncrementCountCustomerLot(lotId))
       
      }
  }
  const decrement=(lotCount:number,inventory:number,lotId:number)=>{
    if(lotCount>1){
      dispatch(DecrementCountCustomerLot(lotId))
    }
}
const removeLot=(id:number)=>{
  dispatch(RemoveCustomerLot(id))
}
const handleRegister=(e:React.MouseEvent<HTMLButtonElement>)=>{
e.preventDefault();
if(loggedIn==true){
  setShowSuccess(true)
setShowError(false)
}
else{
  setShowError(true)
  setShowSuccess(false)
  
}

}

    let totalCost=0;
  return (<>
{/* 
  <div className='shopping-card-modal'>
      <div className="container lots-list ">
        <span className="close">
        <FontAwesomeIcon icon={faClose} onClick={closeModal}/>
        </span>
          {customerLots.length==0 ? (
               <div className='empty-basket'>
                Your basket is empty </div>
          ):(
            <>
            {customerLots.map((el,i)=>{
            
        totalCost+=(el.price*el.lotCount);

          //to find invntory of current lot
          const currentLot:Array<any>=lots.filter((element,index)=>{
             return element.id==el.id
                
              
          })
         
         
         const inventory=currentLot[0].rating.count
    
          return <ModalCount lot={el} removeLot={removeLot} decrement={decrement} inventory={inventory} increment={increment}/> })}
     
     
   
      </>)}
     

          
       
 
  </div>
  {showError==true && (<>
      <div className="error-shopp-regist alert-danger">
        You should sign in to do this!
      </div>
      </>)}
      {showSuccess==true && (<>
      <div className="success-shopp-regist alert-success">
     You can't do this because the api is fake :)
      </div>
    
      </>)}
  { 
    customerLots.length!=0 && (
      <>
<div className="container">
      <div className='regist-order row'>
        <div className="col-md-6">
        <div className="total-cost">
          
          Total Cost :<span className='price'>${totalCost}</span> 
        </div>
        </div>
        <div className="col-md-6">
       
        <button className="btn btn-regist-order" onClick={handleRegister}>Regsit Order</button>
</div>
    
  </div>
  </div>
  </>
    )
  }
  
  </div> */}
 
  </>
    
  )
}
export default ShoppingCardModal