import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'
 const LotDetails = (props:any) => {

  return (
    <>
   
    <div className='container lot-details'>
     <div className="row" >
     <div className="col-md-6">
         <div className="detail-container">
           <div className="title-details"><h3>{props.title}</h3></div>
           <div className="badge"><FontAwesomeIcon icon={faStar}/><span>{props.rate}</span></div>
           <div className="inventory">
             Inventory: <span className="count">{props.count}</span> 
           </div>
           <div className="description-details">{props.description}</div>
         <div className="price">Price: <span className="price-number">{props.price}$</span> </div>
         <button className="btn btn-regist">Add to shopping basket</button>
         </div>
         
         
         </div>
       <div className="col-md-6"><img src={props.image} alt="" /></div>
      
       
     </div>
     </div>
    </>
    
  )
  }
export default LotDetails;
export const getServerSideProps=(context:any)=>{
  
    return {
     props:{
          id:context.query.id,
          title:context.query.title,
          image:context.query.image,
          description:context.query.description,
          rate:context.query.rate,
          count:context.query.count,
          price:context.query.price
     }
    }
}