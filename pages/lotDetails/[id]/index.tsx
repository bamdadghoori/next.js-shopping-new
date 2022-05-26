import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { AddCustomerLot } from '../../../redux/shopping/shoppingActions';
import { GetLotsFail,GetLotsRequest,GetLotsSuccess } from '../../../redux/shopping/shoppingActions'
import { RootState,AppDispatch } from '../../../redux/store'
import { GetStaticPaths,GetStaticProps } from 'next';
import { useState } from 'react';
import https from "https"

 const LotDetails = ({data,error}:{data:any,error:string}) => {
  //  const [error,setError]=useState("") 
const dispatch=useDispatch();
console.log(data)
const lotCount=1;

const addLots=()=>{
dispatch(AddCustomerLot({...data,lotCount:lotCount}))
}
  return (
    <>
    {console.log(error)}
   {!error ?(
       <div className='container lot-details'>

       <div className="row" >
       <div className="col-md-6">
           <div className="detail-container">
             <div className="title-details"><h3>{data.title}</h3></div>
             <div className="badge"><FontAwesomeIcon icon={faStar}/><span>{data.rate}</span></div>
             <div className="inventory">
               Inventory: <span className="count">{data.rating.count}</span> 
             </div>
             <div className="description-details">{data.description}</div>
           <div className="price">Price: <span className="price-number">{data.price}$</span> </div>
           <button className="btn btn-regist" onClick={addLots}>Add to shopping basket</button>
           </div>
           
           
           </div>
         <div className="col-md-6"><img src={data.image} alt="" /></div>
        
         
       </div>
       </div>
   ):(
     <h2>there are some problem in this site,try again later</h2>
   ) }
  
    </>
    
  )
  }
  // LotDetails.getInitialProps=(context:any)=>{
  //   const data={
  //     id:context.query.id,
  //     title:context.query.title,
  //     image:context.query.image,
  //     description:context.query.description,
  //     rate:context.query.rate,
  //     count:context.query.count,
  //     price:context.query.price,
    
  // }
  
  
  
  
  // return {
    
  //   props:JSON.parse(JSON.stringify(data))
     
   
  // }
  // }

// export const getServerSideProps=async(context:any)=>{
//   console.log("x")
//   const response=await axios.get(`https://fakestoreapi.com/products/${context.query.id}`)
 
// const data=response.data
// console.log(data)
 
// //   const data={
// //     id:context.query.id,
// //     title:context.query.title,
// //     image:context.query.image,
// //     description:context.query.description,
// //     rate:context.query.rate,
// //     count:context.query.count,
// //     price:context.query.price,
  
// // }





// return {
  
//   props:JSON.parse(JSON.stringify(data))
   
 
// }
// }
//in yani lazam nist ejaze dastresi be client ro barresi koni va har kasi mittone dastresi dashte bashe!
//https://stackoverflow.com/questions/31861109/tls-what-exactly-does-rejectunauthorized-mean-for-me
axios.defaults.httpsAgent=new https.Agent({
  rejectUnauthorized:false,
})
  
// axios.defaults.httpsAgent=new https.Agent({
//    ca: "MY_CA_BUNDLE" 
// })
  
let error=""

export const getStaticPaths:GetStaticPaths=async(context:any)=>{
  let paths=[]
  try{
    const response= await axios.get("https://fakestoreapi.com/products")
    console.log(response)
    paths=await response.data.map((el:any)=>({params:{id:el.id.toString()}}))
  }
  catch(er:any){
    error=er.message
  }
  //@ts-ignore
  // const data=await response.json();
 


console.log(paths)

return{
paths,
//fallback zamani amal mikone ke url chert o pert benevisi to addressbar age false bashe error 404 barmigardoone age true va blocking bashe minevise Cannot read properties of undefined ba in tafavot ke  to blocking exception va status ro namayesh nemide to console.  to halat production tamaman shabihe haman
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
 

// const data={id:context.params.id}

  
  return{
    //@ts-ignore
    props:{data,error}
      // {
      
      //   id:context.params.id,
      //     // title:context.query.title,
      //     // image:context.query.image,
      //     // description:context.query.description,
      //     // rate:context.query.rate,
      //     // count:context.query.count,
      //     // price:context.query.price
      // }
    ,
    // revalidate:2
      
    
  }
}


export default LotDetails;