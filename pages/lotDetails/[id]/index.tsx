import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { getLots,getLotById } from '../../../utils/manualData';
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
{console.log(data)}    

  
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
  let lots:any=[]
  try{
     lots= await getLots();

    paths=await lots.map((el:any)=>({params:{id:el.id.toString()}}))
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
      const id=context.params.id
       data= await getLotById(id)
     
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