import React from 'react'
import { useEffect,useState } from 'react'
import { RootState,AppDispatch } from '../redux/store'
import { useDispatch,useSelector } from 'react-redux'
import Link from "next/link"
const Lots = ({lots}:{lots:Array<any>}) => {
     
  
  return (
    <>
    <div className="container">
      <div className="row">
        {lots.map((el)=><div className="col-md-3 ">
         
          <Link href={{pathname:"lotDetails/[id]",query:{id:el.id,title:el.title,image:el.image,description:el.description,rate:el.rating.rate,count:el.rating.count,price:el.price},}} as={`/lotDetails/${el.id}`}>
          
          <div className="lot">
            
        <div className="img-container">
          <img src={el.image}/>
        </div>
        <div className="title">
          {el.title}
        </div>
        <div className="price">
          <span className="price-title">Price:</span>
          <span>{el.price}</span>
          
        </div>
        </div>
        </Link>
        </div>)}
        
      </div>
    </div>
    {/* <ul>{lots.map((el)=><li>{el.title}</li>)}</ul> */}
      
   
 
    </>
  )
  }
export default Lots;
