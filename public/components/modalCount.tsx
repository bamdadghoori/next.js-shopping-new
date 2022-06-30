import React from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { IncrementCountCustomerLot } from '../../redux/shopping/shoppingActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
 const ModalCount = ({lot,inventory,increment,decrement,removeLot}:{lot:{id:number,price:number,title:string,lotCount:number,image:any},inventory:number,increment:(...args:any[])=>void,decrement:(...args:any[])=>void,removeLot:(...args:any[])=>void}) => {
    const dispatch=useDispatch();
    console.log(lot.id)
     console.log(inventory)
            // const [lotCount,setLotCount]=useState(lot.lotCount)
            //age moteghayeret mostaghim az redux gerefte nashe ba taghiir dar redux safhe be rooz resani nemishe!
            const currentLot=useSelector((state:RootState)=>state.customerLots.filter((el,i)=>{
                return el.id==lot.id
            }))
          const lotCount=currentLot[0].lotCount
         const totalPriceOfEach=lot.price*lot.lotCount
    // const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    //  setLotCount(parseInt(e.currentTarget.value)) 
    //  }
  
    // const increment=()=>{
    //     if(lotCount<=inventory){
    //         dispatch(IncrementCountCustomerLot(lot.id))
    //     }
    // }
    return (<div className='row modal-lot' key={lot.id}>
    <div className="col-md-6">
        <div className="title">
        {lot.title}
        </div>
        <div className="inventory">
          Inventory: {inventory}
       </div>
        <div className="price">
           {totalPriceOfEach}$
       </div>
      
    </div>
    <div className="col-md-6">
       <img src={lot.image}/>
       <div className="lot-count">
        {
            lotCount>1 ? (<button className="decrement" onClick={()=>decrement(lotCount,inventory,lot.id)}>-</button>):(<button className="decrement" onClick={()=>removeLot(lot.id)}>
                  <FontAwesomeIcon icon={faTrash} />
            </button>)
        }
       
           {/* <input type="text" inputMode='numeric' id="count" min="1" max={inventory} value={lotCount} onChange={handleChange} / > */}
           <div className="lotCount-number">{lotCount}</div>
           
               <button className="increment" onClick={()=>increment(lotCount,inventory,lot.id)}>+</button>
               
           
           
       </div>
      
    </div>

</div>)
}
export default ModalCount;
