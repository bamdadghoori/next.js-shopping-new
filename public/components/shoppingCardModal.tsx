import React from 'react'
import { useState,useEffect } from 'react'
import ModalCount from './modalCount'
import { useSelector } from 'react-redux'
import {RootState} from "../../redux/store"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { IncrementCountCustomerLot,DecrementCountCustomerLot,RemoveCustomerLot } from '../../redux/shopping/shoppingActions'
import { useDispatch } from 'react-redux'

const ShoppingCardModal = ({closeModal}:{closeModal:(...args:any[])=>void}) => {

 
  const dispatch=useDispatch();
    
    // const [lots,setLots]=useState([])
    let lots=useSelector((state:RootState)=>state.lots)
    let customerLots=useSelector((state:RootState)=>state.customerLots)
  // const [changedRedux,setChangedRedux]=useState(false)
    
    const increment=(lotCount:number,inventory:number,lotId:number)=>{
      if(lotCount<=inventory){
          dispatch(IncrementCountCustomerLot(lotId))
          // setChangedRedux(!changedRedux)
          // setLots(useSelector((state:RootState)=>state.lots))
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
    let totalCost=0;
  return (<>
{console.log(customerLots)}
{ console.log("x")}
{console.log(lots)}
  <div className='shopping-card-modal'>
      <div className="container lots-list">
        <span className="close">
        <FontAwesomeIcon icon={faClose} onClick={closeModal}/>
        </span>
          
       
      {customerLots.map((el,i)=>{
        totalCost+=el.price;

          //to find invntory of current lot
          const currentLot:Array<any>=lots.filter((element,index)=>{
             return element.id==el.id
                
              
          })
          console.log(currentLot)
         
         const inventory=currentLot[0].rating.count
    
          return <ModalCount lot={el} removeLot={removeLot} decrement={decrement} inventory={inventory} increment={increment}/> })}
      </div>
      <div className="container">
      <div className='regist-order row'>
        <div className="col-md-6">
        <div className="total-cost">
          
          Total Cost :<span className='price'>${totalCost}</span> 
        </div>
        </div>
        <div className="col-md-6">
        <button className="btn btn-regist-order">Regsit Order</button>
</div>
    
  </div>
  </div>
  </div>

 
  </>
    
  )
}
export default ShoppingCardModal