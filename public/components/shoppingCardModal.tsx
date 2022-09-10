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
import { removeFromCustomerLotsAction,decrementCountofCustomerLotAction,incrementCountofCustomerLotAction } from '../../redux/shoppingSlice'
import { useDispatch } from 'react-redux'

const ShoppingCardModal = ({closeModal,shoppingModal}:{shoppingModal:boolean,closeModal:(...args:any[])=>void}) => {
 
//@ts-ignore
 const {loggedIn}=useContext(AppContext);
  const dispatch=useDispatch();
    const [showError,setShowError]=useState(false)
    const [showSuccess,setShowSuccess]=useState(false)
   
    let customerLots=useSelector((state:RootState)=>state.persistedReducer.customerLots)
  let lots=useSelector((state:RootState)=>state.persistedReducer.lots)
 
    //to increment count of one lot
    const increment=(lot:any)=>{
      const inventory=lots.filter((el:any)=>el.id==lot.id)[0].inventory
      console.log(inventory)
      if(lot.count<=inventory){
          dispatch(incrementCountofCustomerLotAction(lot))
       
      }
  }
  //to decrement count of one lot
  const decrement=(lot:any)=>{
    if(lot.count>1){
      dispatch(decrementCountofCustomerLotAction(lot))
    }
    else{
      dispatch(removeFromCustomerLotsAction(lot.id))
    }
    
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
                      <li key={el.id}>
                      <a href="product-left-sidebar.html" className="sidekka_pro_img"><img src={el.imgUrl}alt="product"/></a>
                      <div className="ec-pro-content">
                          <a href="product-left-sidebar.html" className="cart_pro_title">{el.title}</a>
                          <span className="cart-price"><span>{el.price}</span> x {el.count}</span>
                          <div className="qty-plus-minus">
                          <div className="dec ec_qtybtn" onClick={()=>decrement(el)}>-</div>
                              <input className="qty-input" type="number" name="ec_qtybtn" value={el.count} />
                              <div className="inc ec_qtybtn" onClick={()=>increment(el)}>+</div>
                          </div>
                          <a href="#" onClick={()=>removeItem(el.id)} className="remove">×</a>
                      </div>
                  </li>
                    )
                  })}
                   
                </ul>
            </div>
            <div className="ec-cart-bottom">
                <div className="cart-ریزهزینه">
                    <table className="table cart-table">
                        <tbody>
                            <tr>
                                <td className="text-left">ریز هزینه:</td>
                                <td className="text-right">3000 تومان</td>
                            </tr>
                            <tr>
                                <td className="text-left">مالیات (20%) :</td>
                                <td className="text-right">6000 تومان</td>
                            </tr>
                            <tr>
                                <td className="text-left">جمع کل:</td>
                                <td className="text-right primary-color">3600 تومان</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="cart_btn">
                    <a href="cart.html" className="btn btn-primary">مشاهده سبد خرید</a>
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