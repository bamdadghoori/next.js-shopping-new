import React from 'react'
import { useState } from 'react'
import ModalCount from './modalCount'
import { useSelector } from 'react-redux'
import {RootState} from "../../redux/store"
const ShoppingCardModal = ({customerLots}:{customerLots:Array<any>}) => {
    const lots=useSelector((state:RootState)=>state.lots)
  
  return (<>
{console.log(customerLots)}
{ console.log("x")}
  <div className='shopping-card-modal'>
      <div className="container">
          
      {customerLots.map((el,i)=>{
          //to find invntory of current lot
          const currentLot:Array<any>=lots.filter((element,index)=>{
             return element.id==el.id
                
              
          })
         
         const inventory=currentLot[0].rating.count
    
          return <ModalCount lot={el} inventory={inventory}/> })}
      </div>
  </div>
  

  </>
    
  )
}
export default ShoppingCardModal