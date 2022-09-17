import React from 'react'
import { useState,useEffect } from 'react'
import ModalCount from './modalCount'
import { useSelector } from 'react-redux'
import {RootState} from "../../redux/store"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import AppContext from './context'
import ShoppingCardLot from './shoppingCardLot'
import { removeFromCustomerLotsAction,decrementCountofCustomerLotAction,incrementCountofCustomerLotAction,changeCountOfCustomerLotAction } from '../../redux/shoppingSlice'
import { useDispatch } from 'react-redux'

const ShoppingCardModal = ({closeModal,shoppingModal}:{shoppingModal:boolean,closeModal:(...args:any[])=>void}) => {
 
//@ts-ignore
 const {loggedIn}=useContext(AppContext);
  const dispatch=useDispatch();
    const [showError,setShowError]=useState(false)
    const [showSuccess,setShowSuccess]=useState(false)
    const [refresh,setRefresh]=useState(false)
   const changeRefresh=()=>{
    setRefresh(!refresh)
   }
   
    let customerLots=useSelector((state:RootState)=>state.persistedReducer.customerLots)
  //to calculate total price 
  let totalPrice:number=0;
  customerLots.forEach((el:any) => {
    //some lots have price property and some other have newPrice! 
    if(el.price!=undefined){
      totalPrice+=el.price*el.count
    }
    else{
      totalPrice=el.newPrice*el.count
    }
   
  });
  
  let lots=useSelector((state:RootState)=>state.persistedReducer.lots)
 
    //to increment count of one lot
    const increment=(lot:any)=>{
      const inventory=lots.filter((el:any)=>el.id==lot.id)[0].inventory
      console.log(inventory)
      if(lot.count<inventory){
          dispatch(incrementCountofCustomerLotAction(lot))
       
      }
  }
  //to decrement count of one lot
  const decrement=(lot:any)=>{
    if(lot.count>1){
      dispatch(decrementCountofCustomerLotAction(lot))
    }
   
    
}
//to make count input controlled
const handleCountInputChange=(e:React.ChangeEvent<HTMLInputElement>,lot:any)=>{
  const newCount=parseInt(e.currentTarget.value);
  const inventory=lots.filter((el:any)=>el.id==lot.id)[0].inventory
  const newLot={...lot,count:newCount}
  
  if(newCount<inventory&&newLot>1){
    
    dispatch(changeCountOfCustomerLotAction(newLot))
  }


//   if(parseInt(e.currentTarget.value)>lot.inventory || parseInt(e.currentTarget.value)<1)
//  {
//   setCustomerLot(customerLot)
//   }
//   else if(e.currentTarget.value.length==0){
//     setCustomerLot({...customerLot,count:1})
//   }
//  else{
//   setCustomerLot({...customerLot,count: parseInt(e.currentTarget.value)})
//  }
  
  
  
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
//to remove item 
const removeItem=(id:number)=>{
    dispatch(removeFromCustomerLotsAction(id))

}
    let totalCost=0;
  return (<>
           <div className="ec-side-cart-overlay" style={shoppingModal==true ? {display:'none'}:{display:'none'}}></div>
    <div id="ec-side-cart" className={`ec-side-cart ${shoppingModal==true ? 'ec-open':' '}` }>
        <div className="ec-cart-inner">
            <div className="ec-cart-top">
                <div className="ec-cart-title">
                    <span className="cart_title">سبد خرید من</span>
                    <button className="ec-close" onClick={closeModal}>×</button>
                </div>
                <ul className="eccart-pro-items">
                  {customerLots.map((el:any,i:number)=>{
                    return (
                   <ShoppingCardLot removeItem={removeItem} changeRefresh={changeRefresh} lot={el}/>
                    )
                  })}
                   
                </ul>
            </div>
            <div className="ec-cart-bottom">
                <div className="cart-ریزهزینه">
                    <table className="table cart-table">
                        <tbody>
                           
                            <tr>
                                <td className="text-left">جمع کل:</td>
                                <td className="text-right primary-color">{totalPrice} تومان</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="cart_btn">
                    
                    <a href="checkout.html" className="btn btn-secondary">ادامه خرید</a>
                </div>
            </div>
        </div>
    </div>

{/* 
  <div classNameName='shopping-card-modal'>
      <div classNameName="container lots-list ">
        <span classNameName="close">
        <FontAwesomeIcon icon={faClose} onClick={closeModal}/>
        </span>
          {customerLots.length==0 ? (
               <div classNameName='empty-basket'>
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
      <div classNameName="error-shopp-regist alert-danger">
        You should sign in to do this!
      </div>
      </>)}
      {showSuccess==true && (<>
      <div classNameName="success-shopp-regist alert-success">
     You can't do this because the api is fake :)
      </div>
    
      </>)}
  { 
    customerLots.length!=0 && (
      <>
<div classNameName="container">
      <div classNameName='regist-order row'>
        <div classNameName="col-md-6">
        <div classNameName="total-cost">
          
          Total Cost :<span classNameName='price'>${totalCost}</span> 
        </div>
        </div>
        <div classNameName="col-md-6">
       
        <button classNameName="btn btn-regist-order" onClick={handleRegister}>Regsit Order</button>
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