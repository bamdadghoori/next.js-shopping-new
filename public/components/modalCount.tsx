import React from 'react'

import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
 const ModalCount = ({lot,inventory,increment,decrement,removeLot}:{lot:{id:number,price:number,title:string,lotCount:number,image:any},inventory:number,increment:(...args:any[])=>void,decrement:(...args:any[])=>void,removeLot:(...args:any[])=>void}) => {
   
    
        
        
            // const currentLot=useSelector((state:RootState)=>state.customerLots.filter((el,i)=>{
            //     return el.id==lot.id
            // }))
        //   const lotCount=currentLot[0].lotCount
         const totalPriceOfEach=lot.price*lot.lotCount
    
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
        {/* {
            lotCount>1 ? (<button className="decrement" onClick={()=>decrement(lotCount,inventory,lot.id)}>-</button>):(<button className="decrement" onClick={()=>removeLot(lot.id)}>
                  <FontAwesomeIcon icon={faTrash} />
            </button>)
        } */}
       
          
           {/* <div className="lotCount-number">{lotCount}</div>
           
               <button className="increment" onClick={()=>increment(lotCount,inventory,lot.id)}>+</button> */}
               
           
           
       </div>
      
    </div>

</div>)
}
export default ModalCount;
