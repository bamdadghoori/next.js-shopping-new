import React from 'react'
import axios from 'axios'
import https from "https"
import Lots from "../../lots"
import { GetStaticPaths,GetStaticProps } from 'next';
 const LotsInCategory = ({data}:{data:Array<any>}) => {
   
  return (
    <>
    {console.log(data)}
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
    fallback:true
  }

}
export const getStaticProps:GetStaticProps=async(context:any)=>{
  let data:Array<any> =[]
  try{
    const response= await axios.get(`https://fakestoreapi.com/products/category/${context.params.category}`)
    data=response.data
    alert("x")
  }
  catch(er:any){

  }
  return{
    props:{data},
    revalidate:2
  }
}
// export const getServerSideProps=async(context:any)=>{
//     console.log("x")
//     const response=await axios.get(`https://fakestoreapi.com/products/category/${context.params.category}`)
   
//   let data=response.data
//   console.log(data)
   
//   //   const data={
//   //     id:context.query.id,
//   //     title:context.query.title,
//   //     image:context.query.image,
//   //     description:context.query.description,
//   //     rate:context.query.rate,
//   //     count:context.query.count,
//   //     price:context.query.price,
    
//   // }
  
  
  
  
//   // data=JSON.parse(JSON.stringify(data))
//   return {
    
//     props:{data}
     
   
//   }
//   }
export default LotsInCategory