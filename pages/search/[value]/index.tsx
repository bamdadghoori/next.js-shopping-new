import React from 'react'
import axios from 'axios'
import https from "https"
import { constants } from 'http2'
import Lots from '../../lots'
 const SearchResult = ({data,value}:{data:Array<any>,value:string}) => {
    console.log("x")
     data=data.filter((el,i)=>{
         return el.title.toUpperCase().includes(value.toUpperCase())||el.category.toUpperCase().includes(value.toUpperCase())||el.description.toUpperCase().includes(value.toUpperCase())
     })
  return (
      <>
      {console.log(data)}
      {console.log(value)}
    {data.length==0 ? (
          <h2>there is nothing matches your search</h2>

    ):(
        <Lots lots={data}/>
    )}
    </>
  )
}

axios.defaults.httpsAgent=new https.Agent({
    rejectUnauthorized:false,
  })
export const getServerSideProps=async(context:any)=>{
    console.log("xxsfdaf")
    let data=[]
    try{
        const response=await axios.get(`https://fakestoreapi.com/products`)
         data=response.data
    }
    catch(er){

    }
    return{
        props:{data,value:context.params.value}
    }

}
export default SearchResult;
