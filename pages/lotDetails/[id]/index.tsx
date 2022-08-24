import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';

import { AddCustomerLot } from '../../../redux/shopping/shoppingActions';

import { RootState } from '../../../redux/store'
import { GetStaticPaths,GetStaticProps } from 'next';

import https from "https"

 const LotDetails = ({data,error}:{data:any,error:string}) => {
  
const dispatch=useDispatch();

// const customerLots=useSelector((state:RootState)=>state.customerLots)


const lotCount=1;


const addLots=()=>{
//  if(customerLots.findIndex((el)=>el.id==data.id)==-1){
//   dispatch(AddCustomerLot({...data,lotCount:lotCount}))
//  }

}
  return (
    <>
    
   {!error ?(
       <div className='container lot-details'>

       <div className="row" >
        <div className="col-md-4" >
          <div className="img-container">
          <img src={data.image} alt="" />
          </div>
       
        </div>
        <div className="col-md-4">
           <div className="detail-container">
             <div className="title-details"><h3>{data.title}</h3></div>
         
            
             <div className="description-details">{data.description}</div>
          
           </div>
        </div>
        <div className="col-md-4">
        <div className="detail-container">
          <div className="last-container">
          <div className="badge"><FontAwesomeIcon icon={faStar}/><span>{data.rating.rate}</span></div>
        <div className="inventory">
               Inventory: <span className="count">{data.rating.count}</span> 
             </div>
             
             <div className="price">Price: <span className="price-number">{data.price}$</span> </div>
           <button className="btn btn-regist" onClick={addLots}>Add to shopping basket</button>
           </div>
        </div>
        </div>
      
        
         
       </div>
       </div>
   ):(
     <h2>there are some problem in this site,try again later</h2>
   ) }
  
    </>
    
  )
  }
  

//https://stackoverflow.com/questions/31861109/tls-what-exactly-does-rejectunauthorized-mean-for-me
axios.defaults.httpsAgent=new https.Agent({
  rejectUnauthorized:false,
})
  

  
let error=""

export const getStaticPaths:GetStaticPaths=async(context:any)=>{
  let paths=[]
  try{
    const response= await axios.get("https://fakestoreapi.com/products")

    paths=await response.data.map((el:any)=>({params:{id:el.id.toString()}}))
  }
  catch(er:any){
    error=er.message
  }

 




return{
paths,
//fallback works when you write unknwon url in addressbar if it's false it returns 404 ,else if it's true or blocking, It returns :Cannot read properties of undefined except that in blocking mode you can't see exception and status! in production mode there are no diffrences!

fallback:false,
}
}
//@ts-ignore
let data={};

 export const getStaticProps:GetStaticProps=async(context:any)=>{
    try{
      const response= await axios.get(`https://fakestoreapi.com/products/${context.params.id}`)
      data=response.data
    }
    catch(er:any){
   error=er.message
    }
 


  
  return{
    //@ts-ignore
    props:{data,error}
    
      
    
  }
}


export default LotDetails;