import React from 'react'
import axios from 'axios'
import https from "https"
import Lots from "../../lots"
import { GetStaticPaths,GetStaticProps } from 'next';
 const LotsInCategory = ({data}:{data:Array<any>}) => {
   
  return (
    <>

    <Lots lots={data}/>
    </>
  )
}

axios.defaults.httpsAgent=new https.Agent({
  rejectUnauthorized:false,
})

export const getStaticPaths:GetStaticPaths=async()=>{


 
  let paths:Array<any>=[]
  try{
   const response=await axios.get(`https://fakestoreapi.com/products`)
   paths=await response.data.map((el:any)=>({params:{category:el.category.toString()}}))
  
  
  }
  catch(er){
    
  }

  return{
    paths,
    fallback:false,
  }

}
export const getStaticProps:GetStaticProps=async(context:any)=>{

  let data:Array<any> =[]
  try{
    const response= await axios.get(`https://fakestoreapi.com/products/category/${context.params.category}`)
    data=response.data
    
  }
  catch(er:any){
console.log(er.message)
  }
  return{
    props:{data},
    revalidate:2
  }
}

export default LotsInCategory