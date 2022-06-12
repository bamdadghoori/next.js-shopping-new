import React from 'react'
import { useState } from 'react'
 const ModalCount = ({lot,inventory}:{lot:{id:number,price:number,title:string,lotCount:number,image:any},inventory:number}) => {
    
     console.log(inventory)
            const [lotCount,setLotCount]=useState(lot.lotCount)
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
     setLotCount(parseInt(e.currentTarget.value)) 
     }
     const decrement=()=>{
        if(lotCount>1){
            setLotCount(lotCount-1)
        }
    }
    const increment=()=>{
        if(lotCount<=inventory){
            setLotCount(lotCount+1)
        }
    }
    return (<div className='row modal-lot' key={lot.id}>
    <div className="col-md-6">
        <div className="title">
        {lot.title}
        </div>
        <div className="inventory">
          Inventory: {inventory}
       </div>
        <div className="price">
           {lot.price}$
       </div>
      
    </div>
    <div className="col-md-6">
       <img src={lot.image}/>
       <div className="lot-count">
       <button className="decrement" onClick={decrement}>-</button>
           {/* <input type="text" inputMode='numeric' id="count" min="1" max={inventory} value={lotCount} onChange={handleChange} / > */}
           <div className="lotCount-number">{lotCount}</div>
           
               <button className="increment" onClick={increment}>+</button>
               
           
           
       </div>
      
    </div>

</div>)
}
export default ModalCount;
